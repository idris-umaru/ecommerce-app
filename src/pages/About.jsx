import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import Title from '../components/Title/Title'

const stats = [
  { number: '10K+', label: 'Products' },
  { number: '50K+', label: 'Happy Customers' },
  { number: '4.9★', label: 'Average Rating' },
  { number: '120+', label: 'Brands' },
]

const values = [
  {
    
    title: 'Curated Quality',
    desc: 'Every product on NovaCart is hand-picked for quality, style, and value. No filler, only the best.',
  },
  {
    
    title: 'Fast Delivery',
    desc: 'We partner with top logistics providers to ensure your orders arrive quickly and safely.',
  },
  {
    
    title: 'Customer First',
    desc: 'Our support team is available 24/7. Easy returns, no questions asked, always on your side.',
  },
  {
    
    title: 'Sustainable',
    desc: 'We work with eco-conscious brands and use minimal, recyclable packaging wherever possible.',
  },
]

const About = () => {
  return (
    <div className='about-page'>

      {/* ── Hero ── */}
      <section className='about-hero'>
        <div className='about-hero-blob about-blob--1' />
        <div className='about-hero-blob about-blob--2' />

        <div className='about-hero-content'>
          <span className='about-eyebrow'>✦ Our Story</span>
          <h1 className='about-hero-title'>
            Fashion that <span>fits</span> your life
          </h1>
          <p className='about-hero-desc'>
            NovaCart was built for people who love great style without the
            hassle. We curate the best collections across fashion, accessories,
            and footwear all in one place.
          </p>
          <Link to='/collection' className='about-cta'>
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className='about-stats'>
        {stats.map((s, i) => (
          <div className='about-stat' key={i}>
            <span className='about-stat-number'>{s.number}</span>
            <span className='about-stat-label'>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Mission ── */}
      <section className='about-mission'>
        <div className='about-mission-text'>
          <Title text1={'OUR'} text2={'MISSION'} />
          <p>
            We started NovaCart with one simple belief — everyone deserves
            access to beautiful, well-made products at fair prices. Shopping
            should feel exciting, not overwhelming. That's why we do the
            hard work of finding the best products so you don't have to.
          </p>
          <p>
            From Lagos to London, our customers trust us to deliver quality
            they can feel. We're not just a store  we're your personal
            style partner.
          </p>
        </div>

        <div className='about-mission-image'>
          <div className='about-image-placeholder'>
            <span>Nova<b>Cart</b></span>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className='about-values'>
        <div className='about-values-header'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className='about-values-grid'>
          {values.map((v, i) => (
            <div className='about-value-card' key={i}>
              <span className='about-value-emoji'>{v.emoji}</span>
              <h3 className='about-value-title'>{v.title}</h3>
              <p className='about-value-desc'>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className='about-banner'>
        <h2 className='about-banner-title'>Ready to discover your style?</h2>
        <p className='about-banner-sub'>
          Join over 50,000 happy shoppers on NovaCart.
        </p>
        <Link to='/collection' className='about-banner-btn'>
          Start Shopping
        </Link>
      </section>

    </div>
  )
}

export default About