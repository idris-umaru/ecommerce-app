import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Hero from '../components/Hero/Hero';
import LatestCollection from '../components/Collection/LatestCollection';

const Home = () => {
  

  return (
    <div>
      <Hero />
      <LatestCollection />
    </div>
  );
};

export default Home;