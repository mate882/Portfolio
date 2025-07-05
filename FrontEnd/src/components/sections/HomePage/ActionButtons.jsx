
import React from "react";
import '../styles/ActionButtons.css'
import { Link } from 'react-router-dom';

import Button from '../../common/Button'


function SocialLinks(){
    return(
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }} className="freelancelinks">
            <Button className="btn-hire-me"><Link style={{textDecoration:'none', color: '#fdfff6' }} to="/hireme">Hire Me</Link></Button>
            <Button className="btn-contact-me"> <a href="#footer"
                        style={{ textDecoration: 'none', color: '#fdfff6', cursor: 'pointer' }}
                        onClick={(e) => {
                            e.preventDefault();
                            const footer = document.getElementById('footer');
                            if (footer) {
                                footer.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>Contact Me</a></Button>
        </div>
    );
}

export default SocialLinks