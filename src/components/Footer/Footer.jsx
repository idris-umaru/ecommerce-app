import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>

        
        <div className='footer-column'>
          <h2 className='footer-logo'>Nova<span>Cart</span></h2>
          <p className='footer-tagline'>
            Curated fashion for every style and season. Shop smarter with NovaCart.
          </p>
          <div className='footer-socials'>
            <a href='#' className='social-icon' aria-label='Instagram'><FaInstagram /></a>
            <a href='#' className='social-icon' aria-label='Twitter'><FaTwitter /></a>
            <a href='#' className='social-icon' aria-label='Facebook'><FaFacebookF /></a>
            <a href='#' className='social-icon' aria-label='TikTok'><FaTiktok /></a>
          </div>
        </div>

       
        <div className='footer-column'>
          <h4 className='footer-heading'>Company</h4>
          <ul className='footer-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/collection'>Collection</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

       
        <div className='footer-column'>
          <h4 className='footer-heading'>Support</h4>
          <ul className='footer-links'>
            <li><Link to='/orders'>Track Order</Link></li>
            <li><a href='#'>Returns & Refunds</a></li>
            <li><a href='#'>Shipping Info</a></li>
            <li><a href='#'>FAQs</a></li>
          </ul>
        </div>

        <div className='footer-column'>
          <h4 className='footer-heading'>Get in Touch</h4>
          <ul className='footer-contact'>
            <li> support@novacart.com</li>
            <li> +234 810 123 4567</li>
            <li> Lagos, Nigeria</li>
            
          </ul>
        </div>

      </div>

      
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} NovaCart. All rights reserved.</p>
        <div className='footer-bottom-links'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;