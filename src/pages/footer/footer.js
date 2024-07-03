import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import './footer.css';

function Footer() {
    return (
        <Navbar className="navbar navbar-light" expand="lg" variant='dark'>
          <Container>
              <Navbar.Text className='mx-auto'>&copy; {new Date().getFullYear()} Parakkum Media</Navbar.Text>
          </Container>
        </Navbar>
      );
}

export default Footer;