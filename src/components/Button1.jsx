import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button1 = ({ children, onClick, className = '', to, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (onClick) {
      onClick(e);
    }
    
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`button button-primary ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button1; 