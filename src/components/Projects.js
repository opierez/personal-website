import React from "react"
import projImg1 from '../assets/img/streameaze.png'
import projImg2 from '../assets/img/track-it.png'
import projImg3 from '../assets/img/absorb-art.png'
import projImg4 from '../assets/img/arecibo.png'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjectCards from "./ProjectCards"
import '../styles/Projects.css'

function Projects() {

    const projects = [
        {
            title: "StreamEaze",
            description: "Full-Stack Development",
            imgUrl: projImg1
        },
        {
            title: "Track It",
            description: "Full-Stack Development",
            imgUrl: projImg2
        }, 
        {
            title: "Absorb Art Shop",
            description: "Frontend Development",
            imgUrl: projImg3
        },
        {
            title: "Arecibo Observatory 2.0",
            description: "Frontend Development",
            imgUrl: projImg4
        }
    ]


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a.</p>
                        <Row className="project-cards-row">
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCards 
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects