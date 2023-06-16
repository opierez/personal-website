import React from "react"
import { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import '../styles/Banner.css'
import Typewriter from 'typewriter-effect'

function Banner() {

    const wordsToRotate = ['Full-Stack Developer', 'Ruby on Rails Developer', 'React Developer', 'Photographer'] // different words to be displayed in the rotating banner

    return(
        <section className="banner d-flex justify-content-center align-items-center" id="home">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} xl={7} className="text-center">
                        <span className="tagline">Hi my name is Olivia Perez</span>
                        <div className="typewriter-wrapper">
                            <Typewriter 
                                options={{
                                    strings: wordsToRotate,
                                    delay: 'natural',
                                    autoStart: true, 
                                    loop: true, 
                                    deleteSpeed: 50
                                }}
                            />
                        </div>
                        <p>I build products aimed at enhancing the lives of individuals and providing them with delightful experiences</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner