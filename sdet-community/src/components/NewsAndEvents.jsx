import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/NewsAndEvents.css'
const NewsAndEvents = () => {
  return (
    <Container id="news-events" className="my-5">
      <h2 className="text-center mb-4">News & Announcements / Upcoming Webinar</h2>

      {/* Upcoming Webinar Card */}
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-center">Upcoming Webinar: QA Best Practices</Card.Title>
              <Card.Text>
                Don't miss our upcoming webinar where we will dive into the latest trends and best practices in Quality Assurance (QA).
                This session is led by industry experts and is designed to help you improve your skills and knowledge in the field.
              </Card.Text>
              <Button
                variant="primary"
                href="https://forms.gle/AXmWnmzzdQ5jhtVc8"
                target="_blank"
                className="w-100"
              >
                Join Webinar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsAndEvents;
