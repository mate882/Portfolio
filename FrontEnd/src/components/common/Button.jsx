import React from 'react';
import './styles/Button.css';

function Button({ onClick, children, className = "" }) { 
    return (
        <button 
            onClick={onClick}
            className={`btn ${className}`}  
        >
            {children}
        </button>
    );
}

export default Button;
