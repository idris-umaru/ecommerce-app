import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Hero from '../components/Hero/Hero';
import LatestCollection from '../components/Collection/LatestCollection';
import BestSeller from '../components/BestSeller/BestSeller';
import OurPolicy from '../components/Policy/OurPolicy';

const Home = () => {
  

  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  );
};

export default Home;