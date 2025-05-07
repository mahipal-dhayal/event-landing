import React from "react";
import { FaYoutube } from "react-icons/fa";
import Registration from "./Registration";

interface EventDetailsProps {
  className?: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ className }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto mt-2 ${className}`}>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-blue-800">Microsoft SDE Secrets</h2>
        <h3 className="text-gray-600">
          Tips by Anshima Choudhary for Landing Top Placements
        </h3>
      </div>

      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-blue-800">Sunday, May 18, 2025</h3>
        <p className="text-gray-500">12:00 PM - 1:00 PM GMT+5:30</p>
        <p className="text-gray-500 flex items-center justify-center gap-2 mt-2">
          <FaYoutube className="text-red-500" />
          YouTube
        </p>
        <Registration />
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-700">About the Event</h3>
        <p className="text-gray-600 mt-2">
          🚀 Join us for an exclusive session with Anshima Choudhary, a seasoned
          Senior Software Development Engineer at Microsoft. Are you a student
          aspiring to excel in placement interviews and secure top positions?
          This is an opportunity you can't afford to miss!
        </p>

        <div className="mt-4">
          <h4 className="text-lg font-semibold text-blue-700">🔍 Session Highlights:</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>
              <strong>Gain Insider Tips:</strong> Discover the insider knowledge and strategies 
              that have propelled Anshima to success in her career at Microsoft.
            </li>
            <li>
              <strong>Placement Interview Mastery:</strong> Learn how to approach and excel in 
              placement interviews, and get a step ahead in the competitive tech industry.
            </li>
            <li>
              <strong>Career Insights:</strong> Get invaluable insights on building a successful 
              career in software development, directly from a Microsoft expert.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-blue-700">👩‍💼 About Anshima Choudhary:</h4>
          <p className="text-gray-600 mt-2">
            Anshima is a highly accomplished Senior Software Development Engineer at Microsoft. 
            She is a 2018 Harvard Model United Nations Winner and has also contributed her expertise 
            at MakeMyTrip. An alumni of NSIT, she graduated with a degree in Computer Science and 
            Engineering in 2020.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-blue-700">📚 Who Should Attend:</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Students aspiring for a career in software development</li>
            <li>Tech enthusiasts seeking insider tips from a Microsoft expert</li>
            <li>Anyone looking to enhance their interview and career-building skills</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-blue-800">
            🌟 Don't miss out on this incredible opportunity to learn from one of the best in the industry. 
            Secure your spot now and take the first step towards your dream career! 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
