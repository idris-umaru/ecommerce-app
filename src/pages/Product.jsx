import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/product';
import { ShopContext } from '../context/ShopContext';
import './Product.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { productId } = useParams();
  const { addToCart, currency } = useContext(ShopContext); // ← pull addToCart from context

  const product = products.find(p => String(p._id) === String(productId));

  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>Looking for product with ID: {productId}</p>
      </div>
    );
  }

  const { name, price, description, image, category } = product;

  const handleAddToCart = () => {
    addToCart(product);           // ← actually adds to cart context
    toast.success('Product added to cart!');
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-page">

      <div className="product-image-section">
        <img
          src={image}
          alt={name}
          className="product-main-image"
        />
      </div>

      <div className="product-details">
        <p className="product-category">{category}</p>
        <h1 className="product-name">{name}</h1>
        <p className="product-price">{currency}{price}</p>
        <p className="product-description">{description}</p>

        <button
          className={`product-add-btn ${added ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {added ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;