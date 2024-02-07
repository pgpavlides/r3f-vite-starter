import React from 'react';
import './InfoWindow.css'; // Ensure you have this CSS file for styling

// Correct the props destructuring here
const InfoWindow = ({ isVisible, info, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="info-window" style={{display: isVisible ? 'block' : 'none'}}>
      <div className="info-content">
        {/* Directly use info.title and info.description */}
        <h2>{info.title}</h2>
        <p>{info.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InfoWindow;
