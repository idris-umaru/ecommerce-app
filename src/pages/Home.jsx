import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Hero from '../components/Hero/Hero';
import LatestCollection from '../components/Collection/LatestCollection';

const Home = () => {
  const shop = useContext(ShopContext);
  console.log("Home.jsx – context:", shop);

  return (
    <div>
      <Hero />
      <LatestCollection />
    </div>
  );
};

export default Home;