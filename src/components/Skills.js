import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/Skills.css'



function Skills() {

    // list of my skills 
    const skills = ['Full-Stack Web Development', 'Ruby on Rails', 'React', 'API Development', 'Github', 'Rest APIs', 'Content Strategy', 'Data Analytics', 'Chatbot Architecture', 'Customer Experience' ]

    // object that determines how many items to display at different screen sizes
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            {/* infinite = true makes the carousel loop infinitely */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider custom-carousel">
                                {skills.map((skill, index) => (
                                    <div key={index} className="item">
                                        <h5>{skill}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={''} />
        </section>
    )
}

export default Skills 