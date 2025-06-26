import React, { useState } from "react";
import "../styles/Servicessection.css"
import Projectcard from './ProjectCard'

function Projects() {
    const [activeSection, setActiveSection] = useState("frontend");

    return (
        <div id="services">
            <div className="tabs">
                <section
                    className={`project frontend ${activeSection === "frontend" ? "active" : ""}`}
                    onClick={() => setActiveSection("frontend")}
                >
                    FrontEnd Projects
                </section>

                <section
                    className={`project backend ${activeSection === "backend" ? "active" : ""}`}
                    onClick={() => setActiveSection("backend")}
                >
                    BackEnd Projects
                </section>

                <section
                    className={`project fullstack ${activeSection === "fullstack" ? "active" : ""}`}
                    onClick={() => setActiveSection("fullstack")}
                >
                    Full-Stack Projects
                </section>

                <section
                    className={`project webdesign ${activeSection === "webdesign" ? "active" : ""}`}
                    onClick={() => setActiveSection("webdesign")}
                >
                    Web Design Projects
                </section>
            </div>
            
            <div className="content">
                {activeSection === "frontend" && (
                <div>
                    <Projectcard section="frontend"/>
                </div>
                )}

                {activeSection === "backend" && (
                <div>
                    <Projectcard section="backend"/>
                </div>
                )}

                {activeSection === "fullstack" && (
                <div>
                    <Projectcard section="fullstack"/>
                </div>
                )}

                {activeSection === "webdesign" && (
                <div>
                    <Projectcard section="webdesign"/>
                </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
