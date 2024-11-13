import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll'; // For smooth scroll to sections
import { motion } from 'framer-motion'; // Framer Motion for hover effect
import '../styles/Navbar.css';

const Home = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">SDET Community</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <motion.div
              whileHover={{ scale: 1.1 }} // Slight zoom effect on hover
              whileTap={{ scale: 0.9 }} // Small tap effect
            >
              <Link 
                to="about-us" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                className="nav-link"
              >
                About Us
              </Link>
            </motion.div>
          </Nav.Link>
          <Nav.Link>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                to="features" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                className="nav-link"
              >
                Features
              </Link>
            </motion.div>
          </Nav.Link>
          <Nav.Link>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                to="join-us" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                className="nav-link"
              >
                Join Us
              </Link>
            </motion.div>
          </Nav.Link>
          <Nav.Link>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                className="nav-link"
              >
                Contact
              </Link>
            </motion.div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Home;
