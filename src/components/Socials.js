import React from "react";
import '../styles/Socials.css'
import navIcon1 from '../assets/img/linkedin_icon_circle.svg.png'
import navIcon2 from '../assets/img/github.png'
import navIcon3 from '../assets/img/email.png'


function Socials() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:opierez@gmail.com'
    }


    return (
        <div className="social-media" id="socials">
            <ul className="social-icon" style={{ listStyleType: 'none' }}>
                <li><a href="https://www.linkedin.com/in/olivia-perez-se/" target="_blank"><img src={navIcon1} alt="LinkedIn"/></a></li>
                <li><a href="https://github.com/opierez" target="_blank"><img src={navIcon2} alt="Github"/></a></li>
                <li><a href="#" target="_blank" onClick={handleEmailClick}><img src={navIcon3} alt="Email" className="email-icon"/></a></li>            
            </ul>
        </div>
    )
}

export default Socials