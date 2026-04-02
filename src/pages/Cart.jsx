import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import './Cart.css'
import Title from '../components/Title/Title'

const Cart = () => {
  const { cartItems, removeFromCart, totalItems, totalPrice, currency, deliveryFee } = useContext(ShopContext)

  if (cartItems.length === 0) {
    return (
      <div className='cart-empty'>
        <Title text1={'YOUR'} text2={'CART'} />
        <p>Your cart is empty.</p>
        <Link to='/collection' className='cart-shop-btn'>Shop Now</Link>
      </div>
    )
  }

  return (
    <div className='cart-page'>

      <div className='cart-header'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      
      <div className='cart-items'>
        {cartItems.map(item => (
          <div className='cart-item' key={item._id}>
            <img src={item.image} alt={item.name} className='cart-item-image' />

            <div className='cart-item-details'>
              <p className='cart-item-name'>{item.name}</p>
              <p className='cart-item-category'>{item.category}</p>
              <p className='cart-item-price'>{currency}{item.price}</p>
            </div>

            <div className='cart-item-qty'>
              Qty: <strong>{item.quantity}</strong>
            </div>

            <p className='cart-item-subtotal'>
              {currency}{(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              className='cart-item-remove'
              onClick={() => removeFromCart(item._id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className='cart-summary'>
        <div className='cart-summary-row'>
          <span>Subtotal ({totalItems} items)</span>
          <span>{currency}{totalPrice.toFixed(2)}</span>
        </div>
        <div className='cart-summary-row'>
          <span>Delivery Fee</span>
          <span>{totalPrice >= 50 ? 'Free' : `${currency}${deliveryFee}`}</span>
        </div>
        <div className='cart-summary-divider' />
        <div className='cart-summary-row cart-summary-total'>
          <span>Total</span>
          <span>{currency}{(totalPrice + (totalPrice >= 50 ? 0 : deliveryFee)).toFixed(2)}</span>
        </div>

        <Link to='/place-order' className='cart-checkout-btn'>
          Proceed to Checkout
        </Link>
      </div>

    </div>
  )
}

export default Cart