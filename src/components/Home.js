import React from 'react';

const Home = () => {
  return (
    <div>
      <h2 className="section-title">Welcome</h2>
      <p style={{ fontSize: '1.2em' }}>
        Welcome to our fabulous flower and chocolate vending machine service. Enjoy a world of beauty and sweetness—available 24/7!
      </p>

      <img src="/vending.jpg" alt="Vending Machine" />

      <p style={{ fontStyle: 'italic' }}>
        Explore our delightful selection, curated just for you!
      </p>
    </div>
  );
};

export default Home;
