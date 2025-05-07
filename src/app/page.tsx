import React from "react";
import EventPoster from "@/components/EventPoster";
import EventDetails from "@/components/EventDetails";
import Footer from "@/components/Footer";

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-50 p-6">
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        <div className="flex-shrink-0 md:w-auto">
          <EventPoster />
        </div>
        <div className="flex-grow">
          <EventDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
