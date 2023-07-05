import React from "react";
import { Col } from "react-bootstrap";
import '../styles/ProjectCards.css'

function ProjectCards({ title, description, imgUrl, githubUrl, tech }) {

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                        <br></br>
                        <br></br>
                        <span>
                            {tech.map((technology, index) => (
                                <React.Fragment key={index}>
                                    {index !== 0 && <span> • </span>}
                                    <span>{technology}</span>
                                </React.Fragment>
                            ))}
                        </span>
                    </div>
                </a>
            </div>
        </Col>
    )
}

export default ProjectCards