import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutUs = () => (
  <Container>
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center mb-5"
    >
      Welcome to the SDET Community – Where Quality Thrives Through Community!
    </motion.h2>
    <Row className="g-4">
      {/* About Us Card */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">About Us</Card.Title>
            <Card.Text>
              We are a passionate group of Software Development Engineers in Test (SDET) and Quality Assurance (QA) professionals based in Kenya. Our mission is to empower and elevate the QA profession by fostering a supportive environment where members can connect, learn, and grow in their careers.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Mission Card */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Our Mission</Card.Title>
            <Card.Text>
              To build an active and supportive community for QA professionals in Kenya, focused on connecting, learning, and growing together in our careers.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Vision Card */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Our Vision</Card.Title>
            <Card.Text>
              To become the leading community for QA professionals in Kenya, empowering members through knowledge-sharing, mentorship, and access to industry opportunities.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <motion.h4
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center mt-5 mb-4"
    >
      What We Offer
    </motion.h4>

    <Row className="g-4">
      {/* Webinars & Live Sessions */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Webinars & Live Sessions</Card.Title>
            <Card.Text>
              Covering the latest trends, best practices, and insights from experts in the QA field.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Hackathons & Skill-Building Events */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Hackathons & Skill-Building Events</Card.Title>
            <Card.Text>
              Hands-on experiences designed to boost technical and problem-solving skills.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Job Posting Mondays */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Job Posting Mondays</Card.Title>
            <Card.Text>
              Weekly job opportunities to support career advancement within the community.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="g-4 mt-4">
      {/* Mentorship Programs */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Mentorship Programs</Card.Title>
            <Card.Text>
              Knowledge-sharing and support from experienced QA professionals to help guide members through their career journey.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Networking Opportunities */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Networking Opportunities</Card.Title>
            <Card.Text>
              In-person and virtual events that allow members to connect and collaborate, building lasting professional relationships.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <motion.h4
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center mt-5 mb-4"
    >
      Our Community Values
    </motion.h4>

    <Row className="g-4">
      {/* Empowerment Through Knowledge */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Empowerment Through Knowledge</Card.Title>
            <Card.Text>
              We believe in continuous learning and skill enhancement to keep our members at the forefront of the QA industry.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Inclusivity and Support */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Inclusivity and Support</Card.Title>
            <Card.Text>
              Our community is a safe space for all QA professionals, offering guidance and collaboration at every stage of their careers.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Commitment to Excellence */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="text-center">Commitment to Excellence</Card.Title>
            <Card.Text>
              By fostering a culture of quality and growth, we ensure that our members can achieve their career goals and set new standards in QA.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
