import React from "react";
import { Carousel, Container } from 'react-bootstrap';
import './works.css';
function Works() {
    return(
        <Container className="work-container">
        <Carousel>
        <Carousel.Item>
            <Container className="carousel-container">
            <img className="work-image" src="https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/couples_court.jpeg?alt=media&token=6a3b33e3-e0a3-4ca5-9a6e-31973b7bb3da" alt="Couple Court" />
            </Container>
          <Carousel.Caption>
            <h3 className="work-title">Couple's Court</h3>
            <p className="work-sub">Directed By Ghanasyam</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Container className="carousel-container">
            <img className="work-image" src="https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/URAMUGHAM%20poster.jpg?alt=media&token=38bb90d7-1a31-447c-a702-26c793a4be98" alt="Uramugham" />
            </Container>
          <Carousel.Caption>
            <h3 className="work-title">Uramugham</h3>
            <p className="work-sub">Directed By Sreeram R</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Container className="carousel-container">
            <img className="work-image" src="https://firebasestorage.googleapis.com/v0/b/parakkum-media.appspot.com/o/kotha.jpg?alt=media&token=46a1a3ab-2ee8-4dc8-b424-d5284c2225e4" alt="Couple Court" />
            </Container>
          <Carousel.Caption>
            <h3 className="work-title">King Of Kotha Tribute</h3>
            <p className="work-sub">Directed By Navaneeth BS</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
}

export default Works;