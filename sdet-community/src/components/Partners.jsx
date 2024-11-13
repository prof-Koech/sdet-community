import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import '../styles/Partners.css'; // Optional: Add specific styling for Partners page

const partners = [
  {
    id: 1,
    name: 'Safaricom',
    logo: 'https://via.placeholder.com/150?text=Safaricom', // Replace with actual Safaricom logo URL
    link: 'https://www.safaricom.co.ke', // Replace with actual Safaricom website link
  },
  {
    id: 2,
    name: 'ISTQB Kenya',
    logo: 'https://via.placeholder.com/150?text=ISTQB+Kenya', // Replace with actual ISTQB Kenya logo URL
    link: 'https://www.istqb.org', // Replace with actual ISTQB Kenya website link
  },
];

const Partners = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Our Partners</h2>
      
      {/* Carousel to display partner logos */}
      <Carousel>
        {partners.map((partner) => (
          <Carousel.Item key={partner.id}>
            <Card className="text-center shadow-sm">
              {/* Partner Logo */}
              <Card.Img
                variant="top"
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
              <Card.Body>
                {/* Partner Name */}
                <Card.Title>{partner.name}</Card.Title>
                {/* Partner Link */}
                <Card.Text>
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visit Website
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Partners;
