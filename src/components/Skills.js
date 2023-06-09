import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/Skills.css'



function Skills() {

    // list of my skills 
    const technicalSkills = ['Full Stack Development', 'Ruby', 'Ruby on Rails', 'JavaScript', 'JavaScript Frameworks', 'React', 'CSS', 'HTML', 'JSON', 'Data Analytics', 'Postgres', 'React Hooks', 'Active Record', 'SQLite', 'Github', 'Git', 'Object-Oriented Programming', 'REST APIs', 'API Integration', 'Debugging', 'Postman', 'Bootstrap', 'Tailwind', 'Python', 'Technical Writing', 'Chatbot Content Development', 'Chatbot Architecture', 'Mixpanel', 'Hubspot']
    const softSkills = ['Pair Programming', 'Problem Solving', 'Analytical Skills', 'Cross-Functional Collaborations', 'Project Planning', 'Content Strategy', 'Project Management', 'Customer Insight', 'Effective Communication', 'Time Management and Prioritization', 'Attention to Detail', 'Creativity and Innovation', 'Continuous Learning']

    
    const [skillSelection, setSkillSelection] = useState('Technical')
    const [displayedSkills, setDisplayedSkills] = useState(technicalSkills)

    // when user clicks on skills option, update the skill selection to the user's choice 
    const handleOptionClick = (option) => {
        setSkillSelection(option)
        
        // stores the mappings between the options and displayed skills
        const skillsMap = {
            'Technical': technicalSkills, 
            'Soft Skills': softSkills
        }

        // retrieves the appropriate skills array based on user selection 
        setDisplayedSkills(skillsMap[option])
    }

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
                            <p>As a Content Strategist turned Software Engineer, I bring a unique blend of skills and experience to the table. With a talent for problem-solving, data analysis, and creating impactful solutions, I analyze existing processes to implement enhancements that evolve with company growth and the dynamic tech industry.</p>
                            <p>I have extensive experience creating full-stack applications from scratch, using technologies such as JavaScript, React, Ruby on Rails, SQLite, Postgres, and CSS to name a few. In my previous roles, I've demonstrated my ability to deliver exceptional customer experiences, create and implement effective content strategies, and work on projects ranging from chatbot development to product launches.</p>
                            <div className="option-container" onClick={() => handleOptionClick('Technical')}>
                                <span className={`circle-selection ${skillSelection === 'Technical' ? 'filled-circle' : ''}`}></span>
                                <span className="selection-text">Technical Skills</span>
                            </div>
                            <div className="option-container" onClick={() => handleOptionClick('Soft Skills')}>
                                <span className={`circle-selection ${skillSelection === 'Soft Skills' ? 'filled-circle' : ''}`}></span>
                                <span className="selection-text">Soft Skills</span>
                            </div>
                            {/* infinite = true makes the carousel loop infinitely */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider custom-carousel">
                                {displayedSkills.map((skill, index) => (
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