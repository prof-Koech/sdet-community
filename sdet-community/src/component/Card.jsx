import React from 'react';
import AboutUs from './AboutUs';
import Blog from './Blog';
import Contact from './Contact';
import FAQs from './FAQs';
import Home from './Home';
import MemberProfiles from './MemberProfiles';
import NewsAndEvents from './NewsAndEvents';
import '../App.css';

const Card = () => {
  return (
    <div className="card-container">
      {/* Render each component */}
      <Home />
      <AboutUs />
      <Blog />
      <FAQs />
      <MemberProfiles />
      <NewsAndEvents />
      <Contact />
    </div>
  );
};

export default Card;
