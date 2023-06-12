import React, { useState } from "react";
import Carousel from "react-multi-carousel";
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

    return (
        <div className="skills-container">
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
    )
}

export default Skills 