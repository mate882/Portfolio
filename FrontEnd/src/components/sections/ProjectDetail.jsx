import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BackEndProjects, FrontEndProjects, FullStackProjects } from '../../Data/Projects.js';
import './styles/Projectdetail.css';


function ProjectDetail() {
    const {id } = useParams();
    const project = [...FrontEndProjects, ...BackEndProjects, ...FullStackProjects].find(p => p.id === parseInt(id));

    if (!project) return <h2>Project Not Found</h2>;

    return(
        <div>
            <Link to="/#services"  className="back-btn">{'<'}  Back</Link>
            <div className="project-detail">
                <h2>{project.title}</h2>
                <h4 className='category'>Category: {project.category}</h4>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
            <div className="buttons">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
        </div>
        </div>
    );
}

export default ProjectDetail;