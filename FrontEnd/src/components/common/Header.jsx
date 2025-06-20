import React from "react";
import Button from './Button';
import './styles/Header.css'

function Header(){
    return(
        <header>
            <div>
                <nav>
                    <ul  style={{ listStyle: 'none' }}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact Me</li>
                        <li>Hire Me</li>
                    </ul>
                </nav>
                
                <Button>Sign Up</Button>
                <Button>Sign In</Button>
            </div>
        </header>
    );
}

export default Header