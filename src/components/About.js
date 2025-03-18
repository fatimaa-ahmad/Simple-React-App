import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className="section-title">About Us</h2>
      <p style={{ fontSize: '1.1em' }}>
        Our mission is to provide a convenient, high-quality, and affordable way to gift beautiful flowers and chocolates anytime, anywhere.
      </p>
      <h3 className="section-title">Our Team</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <p>Aisha Alshatti<br /><small>Marketing Specialist</small></p>
        </div>
        <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <p>Danah Alethaimin<br /><small>CEO</small></p>
        </div>
        <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <p>Hadeel Alawadh<br /><small>Finance Manager</small></p>
        </div>
        <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <p>Sara Almailem<br /><small>Inventory Manager</small></p>
        </div>
      </div>
    </div>
  );
};

export default About;
