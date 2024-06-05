import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <CallToAction />
      <Specials />
    </div>
  );
};

export default HomePage;
