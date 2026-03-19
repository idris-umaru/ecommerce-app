import React from 'react';
import { products } from '../../data/product';
import './LatestCollection.css';
import Title from '../Title/Title';
import ProductItem from '../ProductItem/ProductItem';

const LatestCollection = () => {

  const latestProducts = products.slice(0, 10);

  return (
    <div className='latest-collection'>

      <div className='latest-collection-header'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="latest-collection-description">
          Discover our latest collection of products.
        </p>
      </div>

      <div className="latest-collection-grid">
        {latestProducts.map(product => (
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

export default LatestCollection;