import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import '../styles/Testimonial.css'


function Testimonial({ text, name, jobTitle }) {

    return (
        <Container>
            <Row>
                <Col>
                    <blockquote className="blockquote">
                    <p className="mb-0"><FaQuoteLeft size={20}/> {text} <FaQuoteRight size={20}/></p>
                        <footer className="blockquote-footer">{name} {jobTitle}</footer>
                    </blockquote>
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonial