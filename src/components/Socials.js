import React from "react";
import '../styles/Socials.css'
import { Container, Row, Col } from 'react-bootstrap'
import linkedInIcon from '../assets/img/linkedin_icon_circle.svg.png'
import githubIcon from '../assets/img/github.png'
import emailIcon from '../assets/img/email.png'


function Socials() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:opierez@gmail.com'
    }


    return (
        <section className="social-media" id="socials">
            <Container>
                <Row>
                    <Col>
                        <h5 className="social-text">Have a question or want to chat? Please reach out!</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="social-icon" style={{ listStyleType: 'none' }}>
                            <li><a href="https://www.linkedin.com/in/olivia-perez-se/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="LinkedIn" /></a></li>
                            <li><a href="https://github.com/opierez" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Github" /></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" onClick={handleEmailClick}><img src={emailIcon} alt="Email" className="email-icon" /></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Socials