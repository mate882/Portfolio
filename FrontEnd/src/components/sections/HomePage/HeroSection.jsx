
import React from "react";
import Background from '../../../assets/images/Background.PNG';
import '../styles/HeroSection.css'

function HeroSection(){
    return(
        <div className="Herosection">
            <img src={Background} alt=""  data-aos="zoom-in" />
            <h1>Hi Everyone</h1>
            <p data-aos="fade-up" data-aos-delay="300">
                My name is <strong>Mate</strong> (that’s my Georgian name 🇬🇪 — internationally I go by <strong>Matthew Anderson</strong>).<br/><br/>
                I’m a <strong>Full-Stack Web Developer</strong> — building both <strong>Frontend 🖥️</strong> and <strong>Backend 🛠️</strong> systems.<br/><br/>
                Very soon, I’ll also be selling full <strong>Web Design services 🎨</strong> — from beautiful custom designs to fully functional websites!<br/><br/>
                I speak <strong>three languages 🌍</strong> which helps me work with people from all over the world.<br/><br/>
                All the photos you see on this website are <strong>real pictures of me</strong> — just animated or stylized to match the design, but always truly me! 📸✨<br/><br/>
                I’m constantly learning, building, and growing 🚀 — ready to bring your vision to life!<br/><br/>
                📢 To stay updated on my latest projects and offers, you can join my <strong>Telegram</strong>, <strong>WhatsApp</strong>,<strong>Discord</strong> and etc groups (links below).<br/><br/>
                📬 For work inquiries, just click on <strong>Hire Me</strong> Button and write your message to my email or You can Just write me directly to <strong>Instagram</strong>
            </p>
        </div>
    );
}

export default HeroSection