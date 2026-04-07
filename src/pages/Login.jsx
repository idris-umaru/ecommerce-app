import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login:' : 'Sign Up:', formData);
    navigate('/');  // redirect to home after login
  };

  return (
    <div className='login-page'>

      {/* Left — decorative panel */}
      <div className='login-panel'>
        <div className='login-panel-blob' />
        <div className='login-panel-content'>
          <h1 className='login-brand'>Nova<span>Cart</span></h1>
          <p className='login-panel-tagline'>
            Your style, your story. <br /> Shop smarter with NovaCart.
          </p>
          <div className='login-panel-dots'>
            <span /><span /><span />
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className='login-form-section'>
        <div className='login-box'>

          {/* Toggle tabs */}
          <div className='login-tabs'>
            <button
              className={`login-tab ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              className={`login-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <h2 className='login-title'>
            {isLogin ? 'Welcome back ' : 'Create account '}
          </h2>
          <p className='login-subtitle'>
            {isLogin
              ? 'Sign in to your NovaCart account'
              : 'Join thousands of happy shoppers'}
          </p>

          <form className='login-form' onSubmit={handleSubmit}>

            {/* Name — only on sign up */}
            {!isLogin && (
              <div className='form-group'>
                <label className='form-label'>Full Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Umaru Idris'
                  className='login-input'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className='form-group'>
              <label className='form-label'>Email Address</label>
              <input
                type='email'
                name='email'
                placeholder='idrisumaru@example.com'
                className='login-input'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <div className='form-label-row'>
                <label className='form-label'>Password</label>
                {isLogin && (
                  <button type='button' className='forgot-btn'>
                    Forgot password?
                  </button>
                )}
              </div>
              <div className='password-wrapper'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='••••••••'
                  className='login-input'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type='button'
                  className='password-toggle'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button type='submit' className='login-btn'>
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>

          </form>

          <p className='login-switch'>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              className='login-switch-btn'
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? ' Sign Up' : ' Sign In'}
            </button>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;