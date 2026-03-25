import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Hero from '../components/Hero/Hero';
import LatestCollection from '../components/Collection/LatestCollection';
import BestSeller from '../components/BestSeller/BestSeller';

const Home = () => {
  

  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;