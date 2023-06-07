import React from "react";
import { Col } from "react-bootstrap";
import '../styles/ProjectCards.css'

function ProjectCards({ title, description, imgUrl, githubUrl }) {


    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    )
}

export default ProjectCards