import React from "react";

interface EventPosterProps {
  className?: string;
}

const EventPoster: React.FC<EventPosterProps> = ({ className }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-4 max-w-md ${className}`}>
      <img src="/event-banner.jpg" alt="Event Poster" className="rounded-lg w-full" />
    </div>
  );
};

export default EventPoster;
