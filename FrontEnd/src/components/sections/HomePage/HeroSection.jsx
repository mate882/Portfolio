
import React from "react";
import Background from '../../../assets/images/Background.PNG';
import '../styles/HeroSection.css'

function HeroSection(){
    return(
        <div className="Herosection">
            <img src={Background} alt="" />
            <h1>Hi Everyone</h1>
            <p>
                👋 Hi! My name is Mate (that’s my Georgian name 🇬🇪 — internationally I go by Matthew Anderson).
                I’m a Full-Stack Web Developer — building both Frontend 🖥️ and Backend 🛠️ systems.
                Very soon, I’ll also be selling full Web Design services 🎨 — from beautiful custom designs to fully functional websites!
                I speak three languages 🌍 which helps me work with people from all over the world.
                All the photos you see on this website are real pictures of me — sometimes a bit animated or stylized to match the design, but always truly me! 📸✨
                I’m constantly learning, building, and growing 🚀 — ready to bring your vision to life!
            </p>
        </div>
    );
}

export default HeroSection