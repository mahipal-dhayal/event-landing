# 🎉 Event Landing Page

A responsive event landing page built with **Next.js** and **Tailwind CSS**. This landing page is designed to showcase event details with a clean, responsive layout suitable for both mobile and desktop devices.

✨ **Features**
- Responsive design that adapts for mobile and desktop.
- Customizable event poster with an image.
- Event details section with information about the event, date, speaker, and more.
- Registration section to allow users to sign up for the event.
- Simple and clean UI built with **Next.js** and **Tailwind CSS**.

📸 **Live Demo**  
You can view the live demo of the Event Landing Page here:  
[Event Landing Page Demo](https://event-landing-chi.vercel.app/)

🛠️ **How to Use**

1. Clone the repository:
   ```bash
   git clone https://github.com/mahipal-dhayal/event-landing.git
   cd event-landing
   ```
2. Install Dependencies:
   ```bash
   npm i
   ```

3. Running the Development Server
   ```bash
   npm run dev
   ```
#
**Accessing the App
**
Open your browser and visit http://localhost:3000 to view the event landing page.

**🔧 Technologies Used**

**Next.js:** React framework for building fast and scalable applications.

**TypeScript:** Strongly typed programming language for scalable code.

**Tailwind CSS:** Utility-first CSS framework for custom design.

React Icons: For adding scalable vector icons.

**📚 Customization**
**Event Poster**
Replace the image in public/event-banner.jpg with your custom event poster.

**Event Details**
Update the event's name, date, time, and description in the EventDetails.tsx file.

**Registration Section**
Modify the Registration.tsx file to customize the registration form and its functionality.

**Google Sheets Integration**
Set up your Google Sheets API and add the required API credentials in the .env.local file for storing registration data.
   ```bash
   GOOGLE_SERVICE_ACCOUNT_KEY=
   GOOGLE_SHEET_ID=
   ```
