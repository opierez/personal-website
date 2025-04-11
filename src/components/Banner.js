import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Banner.css'
import Typewriter from 'typewriter-effect'

function Banner() {

    const titlesToRotate = ['Full Stack Developer', 'Python Developer', 'React Developer', 'Photographer'] 

    return(
        <section className="banner d-flex justify-content-center align-items-center" id="home">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} xl={7} className="text-center">
                        <span className="tagline">Hi my name is Olivia Perez</span>
                        <div className="typewriter-wrapper">
                            <Typewriter 
                                options={{
                                    strings: titlesToRotate,
                                    delay: 'natural',
                                    autoStart: true, 
                                    loop: true, 
                                    deleteSpeed: 50
                                }}
                            />
                        </div>
                        <p>I build products aimed at enhancing people's day-to-day lives and providing them with delightful experiences</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner