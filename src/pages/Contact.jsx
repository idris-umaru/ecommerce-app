import React, { useState } from 'react'
import './Contact.css'
import Title from '../components/Title/Title'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',  
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className='contact-page'>

      {/* Header */}
      <div className='contact-header'>
        <Title text1={'CONTACT'} text2={'US'} />
        <p className='contact-subtitle'>
          Have a question or need help? We'd love to hear from you.
          Our team usually responds within 24 hours.
        </p>
      </div>

      <div className='contact-container'>

        {/* Left — Info cards */}
        <div className='contact-info'>

          <div className='contact-info-card'>
            <div className='contact-info-icon'>
              <FaEnvelope size={20} />
            </div>
            <div>
              <h4 className='contact-info-title'>Email Us</h4>
              <p className='contact-info-text'>support@novacart.com</p>
              <p className='contact-info-text'>hello@novacart.com</p>
            </div>
          </div>

          <div className='contact-info-card'>
            <div className='contact-info-icon'>
              <FaPhone size={20} />
            </div>
            <div>
              <h4 className='contact-info-title'>Call Us</h4>
              <p className='contact-info-text'>+234  814 3562 372</p>
              <p className='contact-info-text'>+234 90 66 0064 70</p>
            </div>
          </div>

          <div className='contact-info-card'>
            <div className='contact-info-icon'>
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h4 className='contact-info-title'>Visit Us</h4>
              <p className='contact-info-text'>12 Bannex Plaza </p>
              <p className='contact-info-text'>Abuja, Nigeria</p>
            </div>
          </div>

          <div className='contact-info-card'>
            <div className='contact-info-icon'>
              <FaClock size={20} />
            </div>
            <div>
              <h4 className='contact-info-title'>Working Hours</h4>
              <p className='contact-info-text'>Mon – Fri: 9am – 6pm</p>
              <p className='contact-info-text'>Sat: 10am – 4pm</p>
            </div>
          </div>

        </div>

        {/* Right — Form */}
        <div className='contact-form-wrapper'>
          <h2 className='contact-form-title'>Send a Message</h2>

          {submitted ? (
            <div className='contact-success'>
              <span>✅</span>
              <p>Thank you! We'll get back to you shortly.</p>
            </div>
          ) : (
            <form className='contact-form' onSubmit={handleSubmit}>

              <div className='contact-form-row'>
                <div className='contact-form-group'>
                  <label className='contact-label'>Full Name</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Umaru idris'
                    className='contact-input'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='contact-form-group'>
                  <label className='contact-label'>Email Address</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='you@example.com'
                    className='contact-input'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='contact-form-group'>
                <label className='contact-label'>Subject</label>
                <input
                  type='text'
                  name='subject'
                  placeholder='How can we help you?'
                  className='contact-input'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='contact-form-group'>
                <label className='contact-label'>Message</label>
                <textarea
                  name='message'
                  placeholder='Write your message here...'
                  className='contact-textarea'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <button type='submit' className='contact-submit-btn'>
                Send Message
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  )
}

export default Contact