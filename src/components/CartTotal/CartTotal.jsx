import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './CartTotal.css'

const CartTotal = () => {
  const { totalItems, totalPrice, currency, deliveryFee } = useContext(ShopContext)

  const shipping = totalPrice >= 50 ? 0 : deliveryFee
  const orderTotal = (totalPrice + shipping).toFixed(2)

  return (
    <div className='cart-total'>
      <h2 className='cart-total-title'>Order Summary</h2>

      <div className='cart-total-row'>
        <span>Subtotal ({totalItems} items)</span>
        <span>{currency}{totalPrice.toFixed(2)}</span>
      </div>

      <div className='cart-total-row'>
        <span>Delivery Fee</span>
        <span>{shipping === 0 ? 'Free' : `${currency}${shipping}`}</span>
      </div>

      <div className='cart-total-divider' />

      <div className='cart-total-row cart-total-final'>
        <span>Total</span>
        <span>{currency}{orderTotal}</span>
      </div>
    </div>
  )
}

export default CartTotal