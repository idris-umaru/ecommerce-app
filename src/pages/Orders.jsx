import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title/Title'
import './Orders.css'

const statusSteps = ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered']

const Orders = () => {
  const { orders, currency } = useContext(ShopContext)  // ← orders not cartItems
  const [trackedOrder, setTrackedOrder] = useState(null)

  return (
    <div className='orders-page'>

      <div className='orders-header'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {orders.length === 0 ? (
        <div className='orders-empty'>
          <p>You have no orders yet.</p>
        </div>
      ) : (
        <div className='orders-list'>
          {orders.map((order, orderIndex) => (
            <div className='order-group' key={order.id}>

              {/* Order header */}
              <div className='order-group-header'>
                <p className='order-group-date'>📦 Order placed on {order.date}</p>
                <p className='order-group-total'>
                  Total: <strong>{currency}{order.total.toFixed(2)}</strong>
                </p>
              </div>

              {/* Items in this order */}
              {order.items.map((item, itemIndex) => (
                <div className='order-card' key={itemIndex}>

                  <img src={item.image} alt={item.name} className='order-card-image' />

                  <div className='order-card-details'>
                    <p className='order-card-name'>{item.name}</p>
                    <p className='order-card-category'>{item.category}</p>
                    <div className='order-card-meta'>
                      <span>Price: <strong>{currency}{item.price}</strong></span>
                      <span>Qty: <strong>{item.quantity}</strong></span>
                      <span>Total: <strong>{currency}{(item.price * item.quantity).toFixed(2)}</strong></span>
                    </div>
                  </div>

                  <div className='order-card-right'>
                    <div className='order-card-status'>
                      <span className='status-dot' />
                      <p className='status-text'>{order.status}</p>
                    </div>

                    <button
                      className='track-btn'
                      onClick={() => setTrackedOrder(trackedOrder === orderIndex ? null : orderIndex)}
                    >
                      {trackedOrder === orderIndex ? 'Hide Tracking' : 'Track Order'}
                    </button>
                  </div>

                </div>
              ))}

              {/* Tracking bar */}
              {trackedOrder === orderIndex && (
                <div className='tracking-bar'>
                  {statusSteps.map((step, i) => (
                    <div className='tracking-step' key={i}>
                      <div className={`tracking-dot ${i === 0 ? 'active' : ''}`} />
                      {i < statusSteps.length - 1 && (
                        <div className={`tracking-line ${i === 0 ? 'active' : ''}`} />
                      )}
                      <p className={`tracking-label ${i === 0 ? 'active' : ''}`}>{step}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders