import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import '../styles/FAQs.css';

const FAQs = () => {
  return (
    <Container id="faq" className="mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <strong>What is the SDET Community?</strong>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              The SDET Community is a group of Software Development Engineers in Test (SDET) and Quality Assurance (QA) professionals who aim to build a supportive environment for learning, sharing knowledge, and improving quality standards within the industry.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <strong>How can I join the community?</strong>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              You can join the SDET Community by signing up through our website or by reaching out via our contact page. We welcome both experienced QA engineers and those who are new to the field.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <strong>What events does the community organize?</strong>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              We organize webinars, hackathons, skill-building events, and mentorship programs designed to help members stay updated on industry trends and improve their skills.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <strong>Is there a membership fee?</strong>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              No, membership in the SDET Community is free. However, some events may require a registration fee or payment for certain premium content.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default FAQs;
