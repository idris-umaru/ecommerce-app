import React from 'react';
import { products } from '../../data/product';
import './BestSeller.css';
import Title from '../Title/Title';
import ProductItem from '../ProductItem/ProductItem';

const BestSeller = () => {

  const bestSeller = products
    .filter(item => item.bestseller === true)
    .slice(0, 8);

  return (
    <div className='bestseller'>

      <div className='bestseller-header'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='bestseller-description'>
          Our most loved products  handpicked by our customers.
        </p>
      </div>

      <div className='bestseller-grid'>
        {bestSeller.map(product => (
          <ProductItem
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

    </div>
  );
};

export default BestSeller;