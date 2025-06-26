import React from "react";
import Button from './Button';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header({ isAuthenticated, handleLogout }) {
  return (
    <header data-aos="fade-down">
      <div>
        <nav>
          <ul style={{ listStyle: 'none' }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: '#031a09' }}>Home</Link></li>
            <li>
              <a
                href="#services"
                style={{ textDecoration: 'none', color: '#031a09', cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('services');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#footer"
                style={{ textDecoration: 'none', color: '#031a09', cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  const footer = document.getElementById('footer');
                  if (footer) footer.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </li>
            <li><Link to="/hireme" style={{ textDecoration: 'none', color: '#031a09' }}>Hire Me</Link></li>
          </ul>
        </nav>

        {!isAuthenticated ? (
          <>
            <Button className="btn-sign-up">
              <Link to="/register" style={{ textDecoration: 'none', color: '#fdfff6' }}>Sign Up</Link>
            </Button>
            <Button className="btn-sign-in">
              <Link to="/login" style={{ textDecoration: 'none', color: '#fdfff6' }}>Sign In</Link>
            </Button>
          </>
        ) : (
          <Button className="btn-hire-me1" onClick={handleLogout}>Logout</Button>
        )}
      </div>
    </header>
  );
}

export default Header;
