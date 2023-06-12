import React from "react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import '../styles/Testimonial.css'


function Testimonial({ text, name, jobTitle }) {

    return (
        <blockquote className="blockquote">
            <p className="mb-0"><FaQuoteLeft size={20}/> {text} <FaQuoteRight size={20}/></p>
            <footer className="blockquote-footer">{name} {jobTitle}</footer>
        </blockquote>     
    )
}

export default Testimonial