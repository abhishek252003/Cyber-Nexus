import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="section-p1">
      <div className="about-container">
        <h2>Who We Are</h2>
        <p>
          Cyber Nexus is a dynamic platform dedicated to promoting knowledge sharing in the field of cybersecurity. Our mission is to empower individuals and organizations by providing a space where users can contribute their expertise on cybersecurity tools, techniques, and best practices.
        </p>
        <address title="Cyber Nexus Info">
          We aim to make cybersecurity knowledge accessible to everyone, from beginners to experts. By fostering a collaborative community, we ensure that the latest insights and innovations are shared and celebrated.
        </address>
        <div className="marquee-text">
          Join us in securing the digital world with knowledge and collaboration. Contribute your insights to help others protect what matters most.
        </div>
      </div>
    </section>
  );
};

export default About;
