
import React from "react";
import '../styles/Projectcard.css';
import { Link } from "react-router-dom";
import {BackEndProjects, FrontEndProjects, FullStackProjects} from '../../../Data/Projects.js';


function ProjectCard(props) {

    const handlePrevClick = () => {
        const carousel = document.querySelector('.carousel');
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const handleNextClick = () => {
        const carousel = document.querySelector('.carousel');
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }

    if (props.section === "frontend") {
        return (
        <div className="project-section frontend-section">
            <div className="section-padding">
            <div className="carousel">
                {FrontEndProjects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description.slice(0, 60)}...</p>
                    <Link to={`/projects/${project.id}`} className="project-link">View Details</Link>
                </div>
                ))}
            </div>
            <div>
                <button onClick={handlePrevClick} className="prev-btn">{"<"}</button>
                <button onClick={handleNextClick} className="next-btn">{">"}</button>
            </div>
            </div>
        </div>
        );
    } else if (props.section === "backend") {
        return (
        <div className="project-section backend-section">
            <div className="section-padding">
            <div className="carousel">
                {BackEndProjects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description.slice(0, 60)}...</p>
                    <Link to={`/projects/${project.id}`} className="project-link">View Details</Link>
                </div>
                ))}
            </div>
            <div>
                <button onClick={handlePrevClick} className="prev-btn">{"<"}</button>
                <button onClick={handleNextClick} className="next-btn">{">"}</button>
            </div>
            </div>
        </div>
        );
    } else if (props.section === "fullstack") {
        return (
        <div className="project-section fullstack-section">
            <div className="section-padding">
            <div className="carousel">
                {FullStackProjects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description.slice(0, 60)}...</p>
                    <Link to={`/projects/${project.id}`} className="project-link">View Details</Link>
                </div>
                ))}
            </div>
            <div>
                <button onClick={handlePrevClick} className="prev-btn">{"<"}</button>
                <button onClick={handleNextClick} className="next-btn">{">"}</button>
            </div>
            </div>
        </div>
        );
    } else {
        return (
        <div class="site">
            <div class="sketch">
                <div class="bee-sketch red"></div>
                <div class="bee-sketch blue"></div>
            </div>

            <h1 className="errorh">404:
                <small>Section Is Not Available Yet</small></h1>
        </div>
        );
    }
}

export default ProjectCard