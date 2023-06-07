import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Testimonial from "./Testimonial";
import '../styles/Testimonials.css'

function Testimonials() {

    const testimonials = [
        {
            id: 1, 
            text: "It’s a no-brainer that she moved into software engineering, because she was already having to operate as a part-developer / part product-manager in the unique role overseeing deployment of effective chatbot communications at Betterment. She showed skills in data analytics, technical planning, and migration management that rivaled other workers with more technical background, and she picked up skills remarkably fast too.",
            name: "Jamie Cartwright",
            jobTitle: "Growth Product Lead at Betterment"
        },
        {
            id: 2, 
            text: "As a Content Strategy Lead, Olivia made data-driven decisions to significantly deflect Support inquiries and minimize the workload of an entire team. Did I mention she was simultaneously writing content for not one but three product launches? Yeah. She did that.",
            name: "Natalie Langdale",
            jobTitle: "Chatbot Strategy Lead at Betterment"
        },
        {
            id: 3, 
            text: "Being part of a new team, at a startup nonetheless, can be scary but Olivia didn’t shy away from the challenges ahead. She helped me build the team with her willingness to solve tough problems, be a mentor for more junior colleagues and architect processes and procedures that outlasted her tenure on the team.",
            name: "Brandon Andujar",
            jobTitle: "Product Manager at Betterment"
        }
    ]

    return (
        <section className="testimonials" id="testimonials">
            <Container>
                <Row>
                    <Col>
                        <h1>Testimonials</h1>
                    </Col>
                </Row>
                <Row>
                    {testimonials.map((testimonial) => {
                        return <Testimonial key={testimonial.id} {...testimonial} />
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials