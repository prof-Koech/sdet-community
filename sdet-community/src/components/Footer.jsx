// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaLinkedin, FaTwitter } from 'react-icons/fa'; // Only LinkedIn and Twitter icons
import '../App.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h5>Join Us on Social Media</h5>
            <Nav className="justify-content-center">
              <Nav.Item className="mx-3">
                <Nav.Link href="https://www.linkedin.com/company/test-community-ke/" target="_blank" className="text-light">
                  <FaLinkedin size={30} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link href="https://twitter.com/testcommunityke" target="_blank" className="text-light">
                  <FaTwitter size={30} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col md={8} className="text-center">
            <p>&copy; {new Date().getFullYear()} SDET Community. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
