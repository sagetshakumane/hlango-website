import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Hlango Consulting</h3>
                        <p>Professional payroll and recruitment services you can trust.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <p>Email: info@hlangoconsulting.com</p>
                        <p>Phone: (+27) 12 456 7890</p>
                        <p>Address: 123 Address, City, Gauteng, 12345</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Hlango Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;