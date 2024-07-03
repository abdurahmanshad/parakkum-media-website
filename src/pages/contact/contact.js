import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import Instagram from '../../components/ig.svg';
import Mail from '../../components/mail.svg';
import Youtube from '../../components/youtube.svg';

function Contact() {
    return(
        <Container className="contact-container">
            <Row xs={1} md={3}> 
                <Col><Nav.Link href="https://www.instagram.com/parakkum_media_/" target="_blank"><Image src={Instagram} /></Nav.Link><p>Instagram</p></Col>
                <Col><Nav.Link href="mailto:parakkummedia@gmail.com" target="_blank"><Image src={Mail} /></Nav.Link><p>parakkummedia@gmail.com</p></Col>
                <Col><Nav.Link href="https://www.youtube.com/@nandhuvinod8" target="_blank"><Image src={Youtube} /></Nav.Link><p>Youtube</p></Col>
            </Row>
        </Container>
    );
}
export default Contact;