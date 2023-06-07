import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react'
import { RiComputerLine } from 'react-icons/ri'
import navIcon1 from '../assets/img/github.png'
import navIcon2 from '../assets/img/linkedin_icon_circle.svg.png'
import '../styles/NavBar.css'


function NavBar() {

    const [activeLink, setActiveLink] = useState('home') // manages which link the user is on 
    const [scrolled, setScrolled] = useState(false) // detects when/if user has scrolled 


    // determines if the user is scrolling 
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll) // fire this function on scroll 

        return () => window.removeEventListener("scroll", onScroll) // remove the event listener when the component gets removed from the DOM
    },[])

    // updates nav link state when user clicks on selected nav link
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
        <RiComputerLine size={50}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#testimonials" className={activeLink === 'testimonials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('testimonials')}>Testimonials</Nav.Link>
            </Nav>
            <span className='navbar-text'>
            {/* <div className='social-icon'>
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
            </div> */}
            <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;