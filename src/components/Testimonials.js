import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import Testimonial from "./Testimonial";
import '../styles/Testimonials.css'
import { CustomRightArrow, CustomLeftArrow } from "./CustomCarouselArrows";

function Testimonials() {

    const testimonials = [
        {
            text: "She's effectively detail-oriented - Her code reviews catch things that even senior devs miss, and her solutions are thoughtfully designed and cleanly implemented. She has this ability to share technical information in a way that gets everyone collaborating and moving toward solutions.",
            name: "Calvin Hicks",
            jobTitle: "Senior II Software Engineer at Sure"
        },
        {
            text: "Full-stack engineering is no easy task, your role and responsibilities are broad, nebulous, and often more than you can handle. Unless you approach it like Olivia. She has a knack for breaking down her own work into manageable bits and getting everything done without seeming to break a sweat.",
            name: "Andrew Bogle",
            jobTitle: "Engineering Manager at Sure"
        },
        {
            text: "Working with Olivia, I saw firsthand how quickly she absorbs new concepts and translates them into meaningful contributions. She doesn’t wait to be told what to do—she proactively digs in, asks smart questions, and ensures that every piece of her work drives impact. Her technical skills are impressive, but her ability to connect dots between engineering, product, and business goals is what truly sets her apart.",
            name: "Liz Guzman",
            jobTitle: "Senior Project Manager at Sure"
        },
        {
            text: "When I moved to Olivia's team, I was put on my first project to co-lead with Olivia around a new integration. Olivia was able to delegate tasks to others so that she could remain heads down in the code around the major functionality and complex logic. This project also had both backend and front-end pieces and she moved through both parts as well as updated an existing quality assurance tool with the new integration.",
            name: "Justin Snyder",
            jobTitle: "Senior Software Engineer at Sure"
        },
        {
            text: "Olivia led projects of varying complexities, actively collaborating with the team to ensure we were always moving in the right direction. Observing how she tackles complex project tasks is consistently inspiring.",
            name: "Ulyana Hetman",
            jobTitle: "Senior Software QA Engineer at Sure"
        },
        {
            text: "It’s a no-brainer that she moved into software engineering, because she was already having to operate as a part-developer / part product-manager in the unique role overseeing deployment of effective chatbot communications at Betterment. She showed skills in data analytics, technical planning, and migration management that rivaled other workers with more technical background, and she picked up skills remarkably fast too.",
            name: "Jamie Cartwright",
            jobTitle: "Growth Product Lead at Betterment"
        },
        {
            text: "As a Content Strategy Lead, Olivia made data-driven decisions to significantly deflect Support inquiries and minimize the workload of an entire team. Did I mention she was simultaneously writing content for not one but three product launches? Yeah. She did that.",
            name: "Natalie Langdale",
            jobTitle: "Chatbot Strategy Lead at Betterment"
        },
        {
            text: "Being part of a new team, at a startup nonetheless, can be scary but Olivia didn’t shy away from the challenges ahead. She helped me build the team with her willingness to solve tough problems, be a mentor for more junior colleagues and architect processes and procedures that outlasted her tenure on the team.",
            name: "Brandon Andujar",
            jobTitle: "Product Manager at Betterment"
        }
    ]

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="testimonials" id="testimonials">
            <Container>
                <Row>
                    <Col>
                        <div className="testimonials-bx gradient-border">
                            <h2 className="testimonials-heading">Testimonials</h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                customRightArrow={<CustomRightArrow />}
                                customLeftArrow={<CustomLeftArrow />}
                            >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.name}>
                                    <Testimonial {...testimonial}/>
                                </div>
                            ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials