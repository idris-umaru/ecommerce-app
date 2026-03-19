import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ _id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${_id}`} className="product-item">

      <div className="product-item-image-wrapper">
        <img src={image} alt={name} className="product-item-image" />
      </div>

      <div className="product-item-info">
        <p className="product-item-name">{name}</p>
        <p className="product-item-price">{currency}{price}</p>
      </div>

    </Link>
  );
};

export default ProductItem;