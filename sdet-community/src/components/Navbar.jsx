import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll'; // For SPA scroll navigation

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">SDET Community</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="about-us" smooth={true} offset={-70} duration={500}>About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="members" smooth={true} offset={-70} duration={500}>Members</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="events" smooth={true} offset={-70} duration={500}>Events</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="faq" smooth={true} offset={-70} duration={500}>FAQ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="contact" smooth={true} offset={-70} duration={500}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
