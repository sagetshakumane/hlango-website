import React, { useState } from 'react';
import '../styles/Reviews.css';

const Reviews = () => {
    const [reviews] = useState([
        {
            id: 1,
            name: "Sarah Johnson",
            company: "Tech Innovations Ltd",
            rating: 5,
            text: "Hlango Consulting transformed our recruitment process. They found us exceptional talent in record time!",
            service: "Recruitment"
        },
        {
            id: 2,
            name: "Michael Chen",
            company: "Global Solutions Inc",
            rating: 5,
            text: "Their payroll services are impeccable. Accurate, timely, and fully compliant. Highly recommended!",
            service: "Payroll"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            company: "Growth Enterprises",
            rating: 5,
            text: "The team at Hlango Consulting understands business needs deeply. Their personalized approach is outstanding.",
            service: "Both Services"
        },
        {
            id: 4,
            name: "David Thompson",
            company: "Manufacturing Pro",
            rating: 5,
            text: "We've been using their payroll services for 3 years. Flawless execution and excellent support.",
            service: "Payroll"
        },
        {
            id: 5,
            name: "Siphokazi Dlamini",
            company: "Dlamini MetalWorks",
            rating: 5,
            text: "Hlango Consulting transformed our recruitment process. They found us exceptional talent in record time!",
            service: "Recruitment"
        },   
        {
            id: 6,
            name: "Siyabonga Jona",
            company: "Siyabonga Market",
            rating: 5,
            text: "The team at Hlango Consulting understands business needs deeply. Their personalized approach is outstanding.",
            service: "Both Services"
        },             
    ]);

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <div className="reviews-page">
            <section className="page-header">
                <div className="container">
                    <h1>Client Reviews</h1>
                </div>
            </section>

            <section className="reviews-content">
                <div className="container">
                    <div className="reviews-grid">
                        {reviews.map(review => (
                            <div key={review.id} className="review-card">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <h3>{review.name}</h3>
                                        <p>{review.company}</p>
                                    </div>
                                    <div className="service-tag">{review.service}</div>
                                </div>
                                <div className="rating">
                                    {renderStars(review.rating)}
                                </div>
                                <p className="review-text">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="reviews-cta">
                        <h2>Join Our Satisfied Clients</h2>
                        <p>Experience the Hlango Consulting difference for yourself</p>
                        <a href="/contact" className="btn">Contact Us Today</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;