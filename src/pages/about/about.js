import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Logo from '../../components/Logo.svg';
import './about.css';

function About() {
    return(
        <Container className="about-container">
            <Row xs={1} md={2}>
            <Col>
                <Image src={Logo} fluid />
            </Col>
                <Col style={{paddingTop: '250px'}}>
                    <Card style={{backgroundColor: 'transparent', color: 'white'}}>
                    <Card.Body>
                    <Card.Title>Parakkum Media</Card.Title>
                    <Card.Text>
                    Parakkum Media, a dynamic and forward-thinking media production startup, is making waves in the industry with its innovative approach to storytelling and content creation. 
                    With a team of passionate creatives at its helm, Parakkum Media is dedicated to pushing boundaries and exploring new frontiers in the world of media. 
                    From thought-provoking documentaries that shed light on important social issues to immersive virtual reality experiences that transport audiences to new realms, 
                    Parakkum Media's diverse portfolio reflects its commitment to diversity, creativity, and excellence. 
                    With a finger on the pulse of emerging trends and technologies, 
                    the company is not only shaping the future of entertainment but also forging meaningful connections with audiences around the globe. 
                    As Parakkum Media continues to expand its reach and influence, it remains steadfast in its mission to inspire, entertain, and enlighten through the power of storytelling.
                    </Card.Text>
                    </Card.Body>
                    </Card>
            </Col>
            </Row>
        </Container>
    );
}
export default About;