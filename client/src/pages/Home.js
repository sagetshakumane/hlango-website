import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Professional Payroll & Recruitment Services</h1>
                        <p>Efficiency, Accuracy, Right Match - Your trusted partner for comprehensive business solutions</p>
                        <div className="hero-buttons">
                            <Link to="/services" className="btn">Our Services</Link>
                            <Link to="/contact" className="btn btn-orange">Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-preview">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>Comprehensive solutions for your business needs</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Recruitment</h3>
                            <p>Finding the right talent for your organization with precision and care.</p>
                            <ul>
                                <li>Advertising job opportunities</li>
                                <li>Screening qualified candidates</li>
                                <li>Graduate program initiatives</li>
                                <li>Candidate placement</li>
                            </ul>
                            <Link to="/services" className="btn">Learn More</Link>
                        </div>
                        <div className="service-card">
                            <h3>Payroll</h3>
                            <p>Streamlined payroll operations ensuring compliance and accuracy.</p>
                            <ul>
                                <li>Comprehensive payroll operations</li>
                                <li>Monthly statutory declarations</li>
                                <li>Third-party payments</li>
                                <li>Statutory compliance</li>
                            </ul>
                            <Link to="/services" className="btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Streamline Your Business?</h2>
                        <p>Contact us today for a free consultation</p>
                        <Link to="/contact" className="btn btn-orange">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;