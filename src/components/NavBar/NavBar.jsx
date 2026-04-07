import React, { useState, useRef, useEffect, useContext } from 'react'
import './NavBar.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { FaShoppingCart, FaSearch, FaUser, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { ShopContext } from '../../context/ShopContext';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { setShowSearch, totalItems } = useContext(ShopContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLogout = () => {
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt='Nova-cart-logo' className='logo-img' />
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><NavLink to='/' className='nav-link'>Home</NavLink></li>
          <li><NavLink to='/collection' className='nav-link'>Collection</NavLink></li>
          <li><NavLink to='/about' className='nav-link'>About</NavLink></li>
          <li><NavLink to='/contact' className='nav-link'>Contact</NavLink></li>
        </ul>

        <div className="nav-icons">

          {/* Search */}
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => setShowSearch(true)}
          >
            <FaSearch size={18} />
          </button>

          {/* User dropdown */}
          <div className="user-wrapper" ref={dropdownRef}>
            <button
              className="icon-btn"
              aria-label="User menu"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUser size={18} />
            </button>

            {dropdownOpen && (
              <div className="dropdown">
                {/* ← Sign In link added here */}
                <NavLink to='/login' className='dropdown-item' onClick={() => setDropdownOpen(false)}>
                  <FaUser size={13} />
                  Sign In
                </NavLink>
                <NavLink to='/orders' className='dropdown-item' onClick={() => setDropdownOpen(false)}>
                  <FaBoxOpen size={13} />
                  Orders
                </NavLink>
                <div className="dropdown-divider" />
                {/* ← Logout now navigates to /login */}
                <button className="dropdown-item dropdown-logout" onClick={handleLogout}>
                  <FaSignOutAlt size={13} />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart with live count badge */}
          <NavLink to='/cart' className="icon-btn" aria-label="Cart">
            <FaShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </NavLink>

          {/* Hamburger — mobile only */}
          <button
            className="icon-btn hamburger"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><NavLink to='/' className='mobile-nav-link' onClick={closeMobileMenu}>Home</NavLink></li>
          <li><NavLink to='/collection' className='mobile-nav-link' onClick={closeMobileMenu}>Collection</NavLink></li>
          <li><NavLink to='/about' className='mobile-nav-link' onClick={closeMobileMenu}>About</NavLink></li>
          <li><NavLink to='/contact' className='mobile-nav-link' onClick={closeMobileMenu}>Contact</NavLink></li>
        </ul>

        <div className="mobile-divider" />

        <p className="mobile-section-label">Account</p>
        <ul className="mobile-nav-links">
          {/* ← Sign In link in mobile menu */}
          <li>
            <NavLink to='/login' className='mobile-nav-link' onClick={closeMobileMenu}>
              <FaUser size={14} /> Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to='/orders' className='mobile-nav-link' onClick={closeMobileMenu}>
              <FaBoxOpen size={14} /> Orders
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' className='mobile-nav-link' onClick={closeMobileMenu}>
              <FaShoppingCart size={14} />
              {totalItems > 0 && <span className="mobile-cart-badge">{totalItems}</span>}
              Cart
            </NavLink>
          </li>
        </ul>

        <div className="mobile-divider" />

        {/* ← Mobile logout also navigates to /login */}
        <button className="mobile-logout" onClick={() => { closeMobileMenu(); navigate('/login'); }}>
          <FaSignOutAlt size={14} /> Logout
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-backdrop" onClick={closeMobileMenu} />
      )}
    </>
  )
}

export default NavBar