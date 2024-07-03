import React from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import './gallery.css';

function Gallery() {
    return(
        <Container className="gallery-container">
            <Row xs={1} md={2}>
                <Col><Image className="gallery-image" src="https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/gallery.jpg?alt=media&token=90870826-c921-4102-b148-9e24717625b5" fluid /></Col>
                <Col><Image className="gallery-image" src="https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/gallery-1.jpg?alt=media&token=7bdec40c-6204-49dd-bc54-42d785629d97" fluid /></Col>
                <Col><Image className="gallery-image" src="https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/gallery-2.jpg?alt=media&token=a9722d0e-ca87-4194-9a8e-0c359d7b48d5" fluid /></Col>
            </Row>
            
        </Container>
    );
}
export default Gallery;