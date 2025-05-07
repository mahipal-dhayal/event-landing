'use client';
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 max-w-md">
      <h3 className="text-lg font-semibold text-blue-800">Registration</h3>
      {!showForm ? (
        <div>
          <p className="text-gray-500">Welcome! To join the event, please register below.</p>
          <button
            onClick={toggleForm}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      ) : (
        <RegistrationForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default Registration;
