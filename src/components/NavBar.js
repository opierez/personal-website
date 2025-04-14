import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'
import '../styles/NavBar.css'


function NavBar() {

    const [activeLink, setActiveLink] = useState('home') 
    const [scrolled, setScrolled] = useState(false) 

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll) 

        return () => window.removeEventListener("scroll", onScroll) 
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about-me" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#testimonials" className={activeLink === 'testimonials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('testimonials')}>Testimonials</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <Nav.Link href="#socials">
                    <button className='vvd'><span>Connect With Me</span></button>
                </Nav.Link>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;