import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <section className="hero">

      {/* Background decorations */}
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />

      {/* Left — Text content */}
      <div className="hero-content">
        <span className="hero-badge">✦ New Season Arrivals</span>

        <h1 className="hero-title">
          Discover <br />
          <span className="hero-title--accent">Your Style</span>
        </h1>

        <p className="hero-description">
          Explore our latest collection of trendy and stylish products.
          Find the perfect fit for your unique taste.
        </p>

        <div className="hero-actions">
          <Link to="/collection" className="hero-btn-primary">
            Shop Now
          </Link>
          <Link to="/about" className="hero-btn-secondary">
            Learn More
          </Link>
        </div>

        {/* Stats row */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">10K+</span>
            <span className="hero-stat-label">Products</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">50K+</span>
            <span className="hero-stat-label">Customers</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">4.9★</span>
            <span className="hero-stat-label">Rating</span>
          </div>
        </div>
      </div>

      {/* Right — Image */}
      <div className="hero-image-wrapper">
        <div className="hero-image-bg" />
        <img src={HeroImage} alt="NovaCart hero" className="hero-image" />

        {/* Floating badge */}
        <div className="hero-float-badge">
          <span className="hero-float-icon">🛍️</span>
          <div>
            <p className="hero-float-title">Free Shipping</p>
            <p className="hero-float-sub">On orders over $50</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero