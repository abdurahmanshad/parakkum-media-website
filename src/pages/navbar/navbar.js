import React from 'react';
import {Container, Nav, Navbar, Image } from 'react-bootstrap';
import Logo from '../../components/Logo.svg';
import Instagram from '../../components/ig.svg';
import X from '../../components/x.svg';
import Youtube from '../../components/youtube.svg';
import './navbar.css';

function Navbarr() {

  const scrollToWorks = () => {
    const works = document.getElementById("works");
    if (works) {
      works.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHome = () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg fixed-top navbar-light" variant='dark'>
          <Container>
            <Navbar.Brand onClick={() => window.location.href = '/'}><img className='Logo' src={Logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link onClick={scrollToHome}>Home</Nav.Link>
                <Nav.Link onClick={scrollToAbout}>About Us</Nav.Link>
                <Nav.Link onClick={scrollToWorks}>Works</Nav.Link>
                <Nav.Link onClick={scrollToGallery}>Gallery</Nav.Link>
                <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="https://www.instagram.com/parakkum_media_/" target="_blank"><Image src={Instagram} /></Nav.Link>
                <Nav.Link href="#x" target="_blank"><Image src={X} /></Nav.Link>
                <Nav.Link href="https://www.youtube.com/@nandhuvinod8" target="_blank"><Image src={Youtube} /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navbarr;