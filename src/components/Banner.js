import React from "react"
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import '../styles/Banner.css'
import headerImg from '../assets/img/open-neon.png'

function Banner() {

    const [loopNum, setLoopNum] = useState(0) // number that represents the index of the currently displayed word
    const [isDeleting, setIsDeleting] = useState(false) // indicates whether the text is currently being typed out or deleted
    const wordsToRotate = ['Full-Stack Developer', 'Ruby on Rails Developer', 'React Developer', 'Photographer'] // different words to be displayed in the rotating banner
    const [text, setText] = useState('') // represents the portion of the current word being displayed
    const [delta, setDelta] = useState(300 - Math.random() * 100) // determines how fast each letter of the word is typed out or deleted (value will be between 200 and 300)
    const period = 2000; // amount of time transition between each word

    // runs whenever the value of "text" changes
    useEffect(() => {
        let ticker = setInterval(() => { 
            tick();
        }, delta)

        return () => { clearInterval(ticker)} //cleanup function to clear the timer when the component unmounts or when the "text" state changes
    }, [text]) 

    // calculates the index of the current word to be displayed based on the current value of loopNum
    const tick = () => {
        let i = loopNum % wordsToRotate.length; 
        let fullText = wordsToRotate[i]; // initializes a variable to the current word in the wordsToRotate array
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); // if isDeleting is true, remove the last character from text. if isDeleting is false, add the next character fromm fullText to text 

        setText(updatedText);

        // if text is being deleted, half the value of delta by 2 to make animation slower
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        // if text is not being deleted and the updatedText matches the fullText, set isDeleting to true to start deleting the text and reset delta to the original period value
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        // if text is currently being deleted and if the updateText is an empty string, the entire word has been deleted and it's time to move on to the next word
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false) 
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Olivia, `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner