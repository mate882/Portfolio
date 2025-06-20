import React from "react";
import Button from './Button';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
    return (
        <header data-aos="fade-down" data-aos-duration="1000">
            <div>
                <nav>
                    <ul style={{ listStyle: 'none' }}>
                        <li><Link style={{ textDecoration: 'none', color: '#031a09' }} to="/">Home</Link></li>
                        <li>Services</li>
                        <li>
                            <a
                                href="#footer"
                                style={{ textDecoration: 'none', color: '#031a09', cursor: 'pointer' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const footer = document.getElementById('footer');
                                    if (footer) {
                                        footer.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Contact Me
                            </a>
                        </li>
                        <li><Link style={{ textDecoration: 'none', color: '#031a09' }} to="/hireme">Hire Me</Link></li>
                    </ul>
                </nav>

                <Button className="btn-sign-up">
                    <Link style={{ textDecoration: 'none', color: '#fdfff6' }} to="/auth">Sign Up</Link>
                </Button>
                <Button className="btn-sign-in">
                    <Link style={{ textDecoration: 'none', color: '#fdfff6' }} to="/auth">Sign In</Link>
                </Button>
            </div>
        </header>
    );
}

export default Header;
