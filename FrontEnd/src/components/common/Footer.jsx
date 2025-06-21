import React  from "react";
import "./styles/Footer.css"

import Discord from '../../assets/logos/SocialMedia/Discord.webp';
import Github from '../../assets/logos/SocialMedia/Github.png';
import Instagram from '../../assets/logos/SocialMedia/Instagram.webp';
import linkedin from '../../assets/logos/SocialMedia/LinkedIn.png';
import slack from '../../assets/logos/SocialMedia/Slack.png';
import telegram from '../../assets/logos/SocialMedia/Telegram.webp';
import tiktok from '../../assets/logos/SocialMedia/tiktok.webp';
import twitter from '../../assets/logos/SocialMedia/Twitter-X.webp';
import whatsapp from '../../assets/logos/SocialMedia/whatsapp.webp';
import youtube from '../../assets/logos/SocialMedia/Youtube.png';

import fiverr from '../../assets/logos/Freelancing/fiverr.svg';
import peopleperhour from '../../assets/logos/Freelancing/PeoplePerHour.com.png';
import toptal from '../../assets/logos/Freelancing/Toptal.png';
import truelancer from '../../assets/logos/Freelancing/truelancer.webp';
import upwork from '../../assets/logos/Freelancing/upwork.svg';
import workana from '../../assets/logos/Freelancing/Workana.png';

function Footer(){
    
    return(
        <footer id="footer">
            <div className="container"> 
                <p className="mywebsite">&copy; 2025 Matthew's Website. All rights reserved.</p>
                <p className="email">My Email:  <a href="mailto:matthew.anderson.tech@gmail.com">matthew.anderson.tech@gmail.com</a></p>
                <p className="title1">Social Media</p>
                <a><img className="linkdn" src={linkedin} /></a>
                <a><img className="github" src={Github} /></a>
                <a><img className="discord" src={Discord} /></a>
                <a><img className="slack" src={slack} /></a>
                <a><img className="telegram" src={telegram} /></a>
                <a><img className="whatsapp" src={whatsapp} /></a>
                <a><img className="inst" src={Instagram} /></a>
                <a><img className="tiktok" src={tiktok} /></a>
                <a><img className="youtube" src={youtube} /></a>
                <a><img className="twitter" src={twitter} /></a>
                <p className="title2">Freelance Platforms</p>
                <a><img className="fiverr" src={fiverr} /></a>
                <a><img className="peopleperhour" src={peopleperhour} /></a>
                <a><img className="upwork" src={upwork} /></a>
                <a><img className="workana" src={workana} /></a>
                <a><img className="toptal" src={toptal} /></a>
                <a><img className="truelancer" src={truelancer} /></a>
            </div>
        </footer>
    );
}

export default Footer