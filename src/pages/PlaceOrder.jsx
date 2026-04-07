import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title/Title';
import CartTotal from '../components/CartTotal/CartTotal';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { currency, placeOrder } = useContext(ShopContext);  // ← use placeOrder
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Street: '',
    City: '',
    State: '',
    zipcode: '',
    Country: '',
    Phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder();          // ← saves order then clears cart
    navigate('/orders');   // 
  };

  return (
    <div className='placeorder-page'>

      <div className='placeorder-header'>
        <Title text1={'PLACE'} text2={'ORDER'} />
      </div>

      <div className='placeorder-container'>

        <form className='placeorder-form' onSubmit={handleSubmit}>
          <h2 className='form-section-title'>Delivery Information</h2>

          <div className='form-row'>
            <input type='text' name='FirstName' placeholder='First Name'
              className='form-input' value={formData.FirstName}
              onChange={handleChange} required />
            <input type='text' name='LastName' placeholder='Last Name'
              className='form-input' value={formData.LastName}
              onChange={handleChange} required />
          </div>

          <input type='email' name='Email' placeholder='Email Address'
            className='form-input' value={formData.Email}
            onChange={handleChange} required />

          <input type='text' name='Street' placeholder='Street Address'
            className='form-input' value={formData.Street}
            onChange={handleChange} required />

          <div className='form-row'>
            <input type='text' name='City' placeholder='City'
              className='form-input' value={formData.City}
              onChange={handleChange} required />
            <input type='text' name='State' placeholder='State'
              className='form-input' value={formData.State}
              onChange={handleChange} required />
          </div>

          <div className='form-row'>
            <input type='text' name='zipcode' placeholder='Zip Code'
              className='form-input' value={formData.zipcode}
              onChange={handleChange} required />
            <input type='text' name='Country' placeholder='Country'
              className='form-input' value={formData.Country}
              onChange={handleChange} required />
          </div>

          <input type='tel' name='Phone' placeholder='Phone Number'
            className='form-input' value={formData.Phone}
            onChange={handleChange} required />

          <h2 className='form-section-title' style={{ marginTop: '1.5rem' }}>
            Payment Method
          </h2>
          <div className='payment-options'>
            <label className='payment-option'>
              <input type='radio' name='payment' defaultChecked />
              Cash on Delivery
            </label>
            <label className='payment-option'>
              <input type='radio' name='payment' />
              Credit / Debit Card
            </label>
            <label className='payment-option'>
              <input type='radio' name='payment' />
              Bank Transfer
            </label>
          </div>

          <button type='submit' className='placeorder-btn'>
            Place Order
          </button>
        </form>

        <CartTotal />

      </div>
    </div>
  );
};

export default PlaceOrder;