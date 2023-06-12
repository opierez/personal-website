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
                        <div className="about-bx">
                            <Bio />
                            <Skills />
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={''} />
        </section>
    )
}

export default About 