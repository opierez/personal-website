import React from "react"
import projImg1 from '../assets/img/streameaze.png'
import projImg2 from '../assets/img/track-it.png'
import projImg3 from '../assets/img/absorb-art.png'
import projImg4 from '../assets/img/arecibo2.png'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjectCards from "./ProjectCards"
import '../styles/Projects.css'

function Projects() {

    const projects = [
        {
            title: "StreamEaze",
            description: "Full-Stack Development",
            imgUrl: projImg1,
            githubUrl: "https://github.com/opierez/streameaze-project-management",
            tech: ["React", "Ruby", "Ruby on Rails", "ActiveRecord", "PostgreSQL", "Tailwind", "JavaScript", "React DnD"]
        },
        {
            title: "Track It",
            description: "Full-Stack Development",
            imgUrl: projImg2, 
            githubUrl: "https://github.com/opierez/track-it-budget-tracker", 
            tech: ["React", "Ruby", "Ruby on Rails", "ActiveRecord", "Tailwind", "JavaScript", "React Google Charts"]
        }, 
        {
            title: "Absorb Art Shop",
            description: "Frontend Development",
            imgUrl: projImg3, 
            githubUrl: "https://github.com/opierez/absorb-art-shop",
            tech: ["React", "JavaScript", "CSS"]
        },
        {
            title: "Arecibo Observatory 2.0",
            description: "Frontend Development",
            imgUrl: projImg4, 
            githubUrl: "https://github.com/opierez/arecibo-observatory-space-exploration",
            tech: ["JavaScript", "CSS", "HTML", "NASA API"]
        }
    ]


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Below you'll find a collection of my carefully crafted frontend and fullstack projects that showcase my skills and expertise. From developing a dynamic project management tool to designing a budget tracking application, an immersive mock e-commerce art shop, and a stellar space observation platform, I have poured my passion into creating diverse and innovative experiences.</p>
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