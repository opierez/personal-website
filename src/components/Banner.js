import React from "react"
import { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import '../styles/Banner.css'

function Banner() {

    const [loopNum, setLoopNum] = useState(0) // number that represents the index of the currently displayed word
    const [isDeleting, setIsDeleting] = useState(false) // indicates whether the text is currently being typed out or deleted
    const wordsToRotate = ['Full-Stack Developer', 'Ruby on Rails Developer', 'React Developer', 'Photographer'] // different words to be displayed in the rotating banner
    const [text, setText] = useState('') // represents the portion of the current word being displayed
    const [delta, setDelta] = useState(300 - Math.random() * 100) // determines how fast each letter of the word is typed out or deleted (value will be between 200 and 300)
    const period = 2000; // amount of time transition between each word
    const [inViewport, setInViewport] = useState(true) // tracks when the component is in the viewport or not
    const bannerRef = useRef(null) // reference to the banner section

 
    useEffect(() => {
        // calculates whether the banner section is within the viewport
        const handleScroll = () => {
            const rect = bannerRef.current.getBoundingClientRect()
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
            setInViewport(isInViewport)
        }
      
        // ensures the handleScroll function is called whenever scroll event occurs in the window
        window.addEventListener('scroll', handleScroll)
      
        // cleanup function to remove handleScroll event listener when component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

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
        <section className="banner d-flex justify-content-center align-items-center" id="home" ref={bannerRef}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} xl={7} className="text-center">
                        <span className="tagline">Hi my name is</span>
                        <h1>{`Olivia Perez, and I'm a `}<span className="wrap">{inViewport ? text : ''}</span></h1> 
                        <p>I build products aimed at enhancing the lives of individuals and providing them with delightful experiences</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner