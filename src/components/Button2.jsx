import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Button2.css';

const Button2 = ({ children, onClick, className = '', href, target, rel, to, ...rest }) => {
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

  if (href) {
    return (
      <a
        href={href}
        target={target || '_self'}
        rel={rel}
        className={`start-project-button ${className}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        {...rest}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={handleClick}
      className={`start-project-button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button2; 