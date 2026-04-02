import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title/Title';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { cartItems, totalPrice, currency, deliveryFee } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    Email: '',
    Street: '',
    City: '',
    State: '',
    zipcode: '',
    Country: '',
    Phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Placed:', formData, cartItems);
    alert('Your order has been placed successfully!');
    setFormData({
      Firstname: '',
      Lastname: '',
      Email: '',
      Street: '',
      City: '',
      State: '',
      zipcode: '',
      Country: '',
      Phone: '',
    });
  };

  const orderTotal = (totalPrice + (totalPrice >= 50 ? 0 : deliveryFee)).toFixed(2);

  return (
    <div className='placeorder-page'>

      <div className='placeorder-header'>
        <Title text1={'PLACE'} text2={'ORDER'} />
      </div>

      <div className='placeorder-container'>

        {/* Left — Delivery Form */}
        <form className='placeorder-form' onSubmit={handleSubmit}>
          <h2 className='form-section-title'>Delivery Information</h2>

          <div className='form-row'>
            <input
              type='text'
              name='Firstname'
              placeholder='First Name'
              className='form-input'
              value={formData.Firstname}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='Lastname'
              placeholder='Last Name'
              className='form-input'
              value={formData.Lastname}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type='email'
            name='Email'
            placeholder='Email Address'
            className='form-input'
            value={formData.Email}
            onChange={handleChange}
            required
          />

          <input
            type='text'
            name='Street'
            placeholder='Street Address'
            className='form-input'
            value={formData.Street}
            onChange={handleChange}
            required
          />

          <div className='form-row'>
            <input
              type='text'
              name='City'
              placeholder='City'
              className='form-input'
              value={formData.City}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='State'
              placeholder='State'
              className='form-input'
              value={formData.State}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-row'>
            <input
              type='text'
              name='zipcode'
              placeholder='Zip Code'
              className='form-input'
              value={formData.zipcode}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='Country'
              placeholder='Country'
              className='form-input'
              value={formData.Country}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type='tel'
            name='Phone'
            placeholder='Phone Number'
            className='form-input'
            value={formData.Phone}
            onChange={handleChange}
            required
          />

          {/* Payment Method */}
          <h2 className='form-section-title' style={{ marginTop: '1.5rem' }}>Payment Method</h2>
          <div className='payment-options'>
            <label className='payment-option active'>
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

        {/* Right — Order Summary */}
        <div className='order-summary'>
          <h2 className='form-section-title'>Order Summary</h2>

          <div className='order-items'>
            {cartItems.map(item => (
              <div className='order-item' key={item._id}>
                <img src={item.image} alt={item.name} className='order-item-image' />
                <div className='order-item-details'>
                  <p className='order-item-name'>{item.name}</p>
                  <p className='order-item-qty'>Qty: {item.quantity}</p>
                </div>
                <p className='order-item-price'>
                  {currency}{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className='order-summary-divider' />

          <div className='order-summary-row'>
            <span>Subtotal</span>
            <span>{currency}{totalPrice.toFixed(2)}</span>
          </div>
          <div className='order-summary-row'>
            <span>Delivery</span>
            <span>{totalPrice >= 50 ? 'Free' : `${currency}${deliveryFee}`}</span>
          </div>

          <div className='order-summary-divider' />

          <div className='order-summary-row order-summary-total'>
            <span>Total</span>
            <span>{currency}{orderTotal}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlaceOrder;