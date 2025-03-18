import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <p>Welcome to our fabulous flower and chocolate vending machine service. Enjoy a world of beauty and sweetness—available 24/7!</p>
      <img 
        src="/vending.jpg" 
        alt="Vending Machine"
        className="homepage-image" // This applies the unique class for styling
      />
    </div>
  );
};

export default Home;
