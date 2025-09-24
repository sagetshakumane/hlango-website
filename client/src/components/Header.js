import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

import logo from '../images/Logo.png'; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActiveLink = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="Hango Consulting" className="logo-image" />
                    </Link>
                </div>
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <Link to="/" className={isActiveLink('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/about" className={isActiveLink('/about')} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link to="/services" className={isActiveLink('/services')} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link to="/reviews" className={isActiveLink('/reviews')} onClick={() => setIsMenuOpen(false)}>Reviews</Link>
                    <Link to="/contact" className={isActiveLink('/contact')} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </nav>
                <button 
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>
        </header>
    );
};

export default Header;