
import React from "react";
import '../styles/SocialLinks.css'
import { Link } from 'react-router-dom';

import Instagram from '../../../assets/logos/SocialMedia/Instagram.webp';
import Github from '../../../assets/logos/SocialMedia/Github.png';
import tiktok from '../../../assets/logos/SocialMedia/tiktok.webp';
import youtube from '../../../assets/logos/SocialMedia/Youtube.png';

import Button from '../../../components/common/Button'


function SocialLinks(){
    return(
        <div className="freelancelinks">
            <p>Main Social Accounts</p>
            <a><img className="inst1" src={Instagram} /></a>
            <a><img className="github1" src={Github} /></a>
            <a><img className="tkt" src={tiktok} /></a>
            <a><img className="youtube1" src={youtube} /></a>
            <Button className="btn-hire-me"><Link style={{textDecoration:'none', color: '#fdfff6' }} to="/hireme">Hire Me</Link></Button>
        </div>
    );
}

export default SocialLinks