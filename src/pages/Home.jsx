import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Hero from '../components/Hero/Hero';
import LatestCollection from '../components/Collection/LatestCollection';
import BestSeller from '../components/BestSeller/BestSeller';
import OurPolicy from '../components/Policy/OurPolicy';
import NewsLetterBox from '../components/News/NewsLetterBox';
const Home = () => {
  

  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;