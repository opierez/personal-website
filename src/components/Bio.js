import React from "react";
import '../styles/Bio.css'
import { GiDiamonds } from 'react-icons/gi'

function Bio () {

    const hobbies = [
        'Behind the lens of a film camera, experimenting with different formats and taking portraits. I also specialize in using early photographic processes, such as wet plate collodion',
        'Engrossed in a captivating Sci-Fi, Fantasy, or Fiction book, always on the lookout for a great read',
        'Outdoors and active, either riding my bike, playing tennis, or weightlifting at the gym',
        'Exploring new destinations around the world! Some of my favorite cities so far include Tokyo, Florence, Barcelona, and Mexico City',
        'Constantly learning, with an insatiable curiosity for discovering new topics and exploring new ideas'
    ]

    // creates a list element for each hobby 
    const hobbyItems = hobbies.map((hobby) => <li key={hobby}><GiDiamonds className="list-icon" />{hobby}</li>)

    const bioInfos = [
        `My passion for technology originates from the desire to create products that positively impact people's lives. Fueled by this drive, I transitioned from Content Strategy to Software Engineering, aspiring to participate in the development process.`,
        `My background working in Customer Experience has taught me the value of understanding and supporting user needs and the importance of addressing them effectively. I take pride in leveraging this customer-centric mindset when building features.`,
        `With a talent for problem-solving, data analysis, and creating impactful solutions, I analyze existing processes to implement enhancements that evolve with company growth and the dynamic tech industry.`,
        `I have extensive experience creating full-stack applications from scratch, using technologies such as JavaScript, React, Ruby, Ruby on Rails, SQLite, PostgreSQL, and CSS to name a few. In my previous roles, I've demonstrated my ability to deliver exceptional customer experiences, create and implement effective content strategies, and work on projects ranging from chatbot development to product launches.`
    ]

    // creates a p element for each bit of bio info
    const bioInfoElements = bioInfos.map((info) => <p key={info}>{info}</p>)

    return (
        <section>
            <h2 className="bio-heading">
                About Me
            </h2>
            <div className="bio-text">
                {bioInfoElements}
                
                <h4>When I'm not coding, you can find me:</h4>
                <ul className="hobby-list">
                    {hobbyItems}
                </ul>
            </div>
        </section>
    )
}

export default Bio 