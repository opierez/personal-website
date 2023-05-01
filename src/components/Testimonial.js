import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Testimonial.css'


function Testimonial({ text, name, jobTitle }) {

    return (
        <Container>
            <Row>
                <Col>
                    <blockquote class="blockquote">
                        <p class="mb=9">{text}</p>
                        <footer class="blockquote-footer">{name} {jobTitle}</footer>
                    </blockquote>
                    {/* <h4>{name}</h4>
                    <p className="mb-0">{jobTitle}</p>
                    <p>{text}</p> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonial