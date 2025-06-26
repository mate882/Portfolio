
import React from "react";
import '../styles/Projectcard.css'

function Projectcard(props){
    if(props.section === "frontend"){
        return(
            <div className="frontend">
                <p>No projects</p>
            </div>
        );
    }
    else if(props.section === "backend"){
        return(
            <div className="backend">
                <p>No projects</p>
            </div>
        );
    }
    else if(props.section === "fullstack"){
        return(
            <div className="fullstack">
                <p>No projects</p>
            </div>
        );
    }
    else{
        return(
            <div className="error">
                <p>404</p>
            </div>
        );
    }
}


export default Projectcard