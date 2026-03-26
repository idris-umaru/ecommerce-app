import React, { useState } from 'react';
import './NewsLetterBox.css';

const NewsLetterBox = () => {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className='newsletter'>

      <div className='newsletter-content'>
        <p className='newsletter-eyebrow'>Stay in the loop</p>
        <h2 className='newsletter-title'>Subscribe & Get 20% Off</h2>
        <p className='newsletter-description'>
          Subscribe to our newsletter for the latest updates, new arrivals, and exclusive offers!
        </p>

        {submitted ? (
          <p className='newsletter-success'> Thank you for subscribing!</p>
        ) : (
          <form className='newsletter-form' onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Enter your email address'
              className='newsletter-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type='submit' className='newsletter-btn'>
              Subscribe
            </button>
          </form>
        )}

        <p className='newsletter-note'>No spam. Unsubscribe anytime.</p>
      </div>

    </div>
  );
};

export default NewsLetterBox;