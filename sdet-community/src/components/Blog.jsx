import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <Container id="blog" className="my-5">
      <h2 className="text-center mb-4">Blog</h2>
      
      {/* Blog Post Cards */}
      <Row>
        <Col md={4} className="mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
            whileTap={{ scale: 0.95 }} // Tap effect
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/350x200" alt="Blog post image" />
              <Card.Body>
                <Card.Title>Blog Post Title 1</Card.Title>
                <Card.Text>
                  A brief introduction or summary of the blog post. Learn more about the latest trends in QA and SDET career growth.
                </Card.Text>
                <a href="#!" className="btn btn-primary">Read More</a>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={4} className="mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/350x200" alt="Blog post image" />
              <Card.Body>
                <Card.Title>Blog Post Title 2</Card.Title>
                <Card.Text>
                  Another snippet of a blog post. Discover how to improve your test automation skills and grow as an SDET.
                </Card.Text>
                <a href="#!" className="btn btn-primary">Read More</a>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={4} className="mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/350x200" alt="Blog post image" />
              <Card.Body>
                <Card.Title>Blog Post Title 3</Card.Title>
                <Card.Text>
                  Read insights on career development and the role of community in enhancing your QA expertise.
                </Card.Text>
                <a href="#!" className="btn btn-primary">Read More</a>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* Embedded Twitter Posts */}
      <h3 className="text-center mt-5">Latest Tweets</h3>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <div className="twitter-embed">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Check out this amazing webinar for QA professionals! 🚀 Join us and elevate your skills in test automation.
                <a href="https://twitter.com/sdet_community" target="_blank" rel="noopener noreferrer">
                  #QA #SDET
                </a>
              </p>
              &mdash; SDET Community (@sdet_community) 
              <a href="https://twitter.com/sdet_community/status/1234567890" target="_blank" rel="noopener noreferrer">
                November 10, 2024
              </a>
            </blockquote>
          </div>
        </Col>

        <Col md={6} className="mb-4">
          <div className="twitter-embed">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Join our upcoming hackathon to challenge yourself and boost your QA problem-solving skills. 💻👩‍💻
                <a href="https://twitter.com/sdet_community" target="_blank" rel="noopener noreferrer">
                  #QA #SDET
                </a>
              </p>
              &mdash; SDET Community (@sdet_community) 
              <a href="https://twitter.com/sdet_community/status/1234567890" target="_blank" rel="noopener noreferrer">
                November 11, 2024
              </a>
            </blockquote>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
