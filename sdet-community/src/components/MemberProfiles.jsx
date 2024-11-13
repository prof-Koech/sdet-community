import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaBriefcase } from 'react-icons/fa'; // Importing icons for role and name

import './MemberProfiles.css'; // Optional: Add specific styling for Member Profiles

const members = [
  {
    id: 1,
    name: 'Collins Kipkoech',
    role: 'QA Engineer',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Angela Kandie',
    role: 'Senior QA Engineer',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Raphael Nyangenya',
    role: 'QA Engineer',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const MemberProfiles = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Meet Our Members</h2>
      <Row className="justify-content-center">
        {members.map((member) => (
          <Col key={member.id} xs={12} md={4} lg={3} className="mb-4">
            <Card className="text-center shadow-sm">
              {/* Member Image */}
              <Card.Img
                variant="top"
                src={member.image}
                alt={member.name}
                className="rounded-circle member-image"
              />
              <Card.Body>
                {/* Member Name */}
                <Card.Title className="mb-2">
                  <FaUser /> {member.name}
                </Card.Title>
                {/* Member Role */}
                <Card.Text>
                  <FaBriefcase /> {member.role}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MemberProfiles;
