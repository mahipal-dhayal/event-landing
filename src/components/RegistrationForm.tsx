import React, { useState } from "react";

interface RegistrationFormProps {
  toggleForm: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    college: "",
    branch: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      alert("Registration Successful!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        college: "",
        branch: "",
        year: "",
      });
      toggleForm(); // Close form after submission
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-gray-700">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 text-black rounded-md mt-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@email.com"
          required
          className="w-full p-3 border border-gray-300 text-black rounded-md mt-2"
        />
      </div>

      <div>
        <label htmlFor="contact" className="text-sm font-semibold text-gray-700">
          Phone *
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="+81 90 1234 5678"
          required
          className="w-full p-3 border border-gray-300 text-black rounded-md mt-2"
        />
      </div>

      <div>
        <label htmlFor="college" className="text-sm font-semibold text-gray-700">
          College/Organisation *
        </label>
        <input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          placeholder="Your College Name"
          required
          className="w-full p-3 border border-gray-300 text-black rounded-md mt-2"
        />
      </div>

      <div>
        <label htmlFor="branch" className="text-sm font-semibold text-gray-700">
          Branch *
        </label>
        <input
          type="text"
          id="branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="Your Branch"
          required
          className="w-full p-3 border border-gray-300 text-black rounded-md mt-2"
        />
      </div>

      <div>
        <label htmlFor="year" className="text-sm font-semibold text-gray-700">
          Year *
        </label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Your Year of Study"
          required
          className="w-full p-3 border border-gray-300 text-black rounded-md mt-2"
        />
      </div>

      <div className="flex gap-4 mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
        <button
          type="button"
          onClick={toggleForm}
          className="w-full bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
