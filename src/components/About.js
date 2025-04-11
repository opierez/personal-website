import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "react-multi-carousel/lib/styles.css";
import '../styles/About.css'
import Bio from "./Bio";
import Skills from "./Skills";



function About() {

    return(
        <section className="about" id='about-me'>
            <Container>
                <Row>
                    <Col>
                        <div className="about-bx gradient-border">
                            <Bio />
                            <Skills />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About 