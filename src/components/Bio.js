import React from "react";
import '../styles/Bio.css'
import { GiDiamonds } from 'react-icons/gi'

function Bio () {
    return (
        <>
            <h2 className="bio-heading">
                About Me
            </h2>
            <div className="bio-text">
                <p>My passion for technology originates from the desire to create products that help people and make a positive impact on their lives, which is why I transitioned from Content Strategy to Software Engineering. My background working in Customer Experience has taught me the value of understanding user needs and the importance of addressing them effectively.</p>
                <p>With a talent for problem-solving, data analysis, and creating impactful solutions, I analyze existing processes to implement enhancements that evolve with company growth and the dynamic tech industry.</p>
                <p>I have extensive experience creating full-stack applications from scratch, using technologies such as JavaScript, React, Ruby on Rails, SQLite, Postgres, and CSS to name a few. In my previous roles, I've demonstrated my ability to deliver exceptional customer experiences, create and implement effective content strategies, and work on projects ranging from chatbot development to product launches.</p>
                
                <h4>When I'm not coding, you can find me:</h4>
                <ul className="hobby-list">
                    <li><GiDiamonds className="list-icon" />Behind the lens of a film camera, experimenting with different formats and taking portraits. I also specialize in using early photographic processes, such as wet plate collodion</li>
                    <li><GiDiamonds className="list-icon" />Engrossed in a captivating Sci-Fi, Fantasy, or Fiction book, always on the lookout for a great read</li>
                    <li><GiDiamonds className="list-icon" />Outdoors and active, either riding my bike, playing tennis, or weightlifting at the gym</li>
                    <li><GiDiamonds className="list-icon" />Exploring new destinations around the world! Some of my favorite cities so far include Tokyo, Florence, Barcelona, and Mexico City</li>
                    <li><GiDiamonds className="list-icon" />Constantly learning, with an insatiable curiosity for discovering new topics and exploring new ideas</li>
                </ul>
            </div>
        </>
    )
}

export default Bio 