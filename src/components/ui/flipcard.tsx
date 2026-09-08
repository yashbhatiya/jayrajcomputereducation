import React, { useState } from "react";
import "./FlipCard.css"; // Optional CSS import

const FlipCard: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="flip-card-front">
          <h2>Project Alpha</h2>
          <p>This is a quick overview of the project goals and outcomes.</p>
          <button onClick={handleFlip}>Learn More</button>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <h2>More Details</h2>
          <p>This project involves AI, automation, and cloud deployment.</p>
          <div className="button-group">
            <button onClick={handleFlip}>← Back</button>
            <a
              href="https://example.com/form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Go to Form</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
