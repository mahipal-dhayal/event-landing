// src/app/api/submit/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Initialize Google Sheets API
const sheets = google.sheets({
  version: 'v4',
  auth: new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })
});

// Google Sheet ID and Sheet Name (Make sure these are correct)
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID as string;
const SHEET_NAME = 'Sheet1'; // Ensure this matches your sheet tab name exactly (case-sensitive)

export async function POST(request: Request) {
  try {
    // Parse request body
    const { name, email, contact, college, branch, year } = await request.json();
    
    // Validate that all fields are provided
    if (!name || !email || !contact || !college || !branch || !year) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Debugging: Log the sheet name and data
    console.log('Sheet Name:', SHEET_NAME);
    console.log('Data:', { name, email, contact, college, branch, year });

    // Ensure the sheet name exists in the Google Sheet
    const sheetResponse = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheetNames = sheetResponse.data.sheets?.map(sheet => sheet.properties?.title);
    if (!sheetNames?.includes(SHEET_NAME)) {
      return NextResponse.json({ message: `Sheet "${SHEET_NAME}" does not exist.` }, { status: 400 });
    }

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:F`, // Specified range with a starting row
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [name, email, contact, college, branch, year]
        ]
      }
    });

    return NextResponse.json({ message: 'Registration successful!' }, { status: 200 });

  } catch (error: any) {
    console.error('Error saving to Google Sheets:', error);

    // Improved error handling with detailed message
    if (error.errors) {
      return NextResponse.json({ message: 'Registration failed.', details: error.errors }, { status: 500 });
    }

    return NextResponse.json({ message: 'Registration failed.', error: error.message }, { status: 500 });
  }
}
