import React, { useState } from 'react';
import './SuccessPopup.css';
import { useNavigate } from 'react-router-dom';

const SuccessPopup = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setVisible(false);
    navigate('/home');
  };

  return (
    visible && (
      <div className="popup-container">
        <div className="popup-card">
          <div className="checkmark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="checkmark-icon"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="popup-title">Success</h2>
          <p className="popup-message">Check your email for your sign up information and then sign in. We'll see you soon!</p>
          <button className="popup-button" onClick={handleClose}>OK</button>
        </div>
      </div>
    )
  );
};

export default SuccessPopup;