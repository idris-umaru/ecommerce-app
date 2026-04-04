import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import './Cart.css'
import Title from '../components/Title/Title'
import CartTotal from '../components/CartTotal/CartTotal'

const Cart = () => {
  const { cartItems,
          removeFromCart,
          totalItems,
          totalPrice,
          currency,
          deliveryFee } = useContext(ShopContext)

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

      <div className='cart-layout'>

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
                <FaTrash size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className='cart-sidebar'>
          <CartTotal />
          <Link to='/place-order' className='checkout-btn'>
            Proceed to Checkout
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Cart