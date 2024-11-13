import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css'; // Optional: Add specific styling for the Contact page

const Contact = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">Feel free to reach out to us directly through the provided contact information below.</p>
          
          {/* Contact Information */}
          <div className="contact-info mt-4">
            <h5>Or reach out to us directly:</h5>
            <ul>
              <li>
                <strong>Email:</strong> <a href="mailto:info@testcommunity.org">info@testcommunity.org</a>
              </li>
              <li>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/test-community-ke/" target="_blank" rel="noopener noreferrer">Test Community LinkedIn</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
