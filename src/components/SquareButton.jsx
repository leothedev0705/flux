import React from 'react';
import '../styles/SquareButton.css';

const SquareButton = ({ icon: Icon, size = 80, onClick }) => {
  return (
    <button 
      className="square-button"
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      {Icon && <Icon size={size * 0.4} className="button-icon" />}
    </button>
  );
};

export default SquareButton; 