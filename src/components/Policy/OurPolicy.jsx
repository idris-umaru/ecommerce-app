import React from 'react';
import './OurPolicy.css';
import { FaShippingFast, FaUndo, FaHeadset } from 'react-icons/fa';

const OurPolicy = () => {
  return (
    <div className='our-policy'>

      <div className='policy-item'>
        <FaShippingFast size={36} className='policy-icon' />
        <h3 className='policy-title'>Free Shipping</h3>
        <p className='policy-description'>Free shipping on all orders over $50. Fast and reliable delivery to your door.</p>
      </div>

      <div className='policy-item'>
        <FaUndo size={36} className='policy-icon' />
        <h3 className='policy-title'>Easy Returns</h3>
        <p className='policy-description'>Not happy? Return any item within 30 days no questions asked.</p>
      </div>

      <div className='policy-item'>
        <FaHeadset size={36} className='policy-icon' />
        <h3 className='policy-title'>24/7 Support</h3>
        <p className='policy-description'>Our customer support team is always here to help you anytime, any day.</p>
      </div>

    </div>
  );
};

export default OurPolicy;