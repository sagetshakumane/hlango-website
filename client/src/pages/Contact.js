import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const generateMailtoLink = () => {
        const subject = `Contact Request from ${formData.name} - ${formData.service || 'General Inquiry'}`;
        
        let body = `New contact form submission:\n\n`;
        body += `Name: ${formData.name}\n`;
        body += `Email: ${formData.email}\n`;
        body += `Phone: ${formData.phone || 'Not provided'}\n`;
        body += `Company: ${formData.company || 'Not provided'}\n`;
        body += `Service Interested In: ${formData.service || 'Not specified'}\n\n`;
        body += `Message:\n${formData.message}`;

        return `mailto:info@hangoconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

// In Contact.js - replace the handleSubmit function:

const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all required fields: Name, Email, and Message');
        return;
    }

    try {
        const response = await fetch('https://hlango-website-backend.onrender.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert('Thank you for your message! We will get back to you within 24 hours.');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: ''
            });
        } else {
            alert('Error submitting form. Please try again or contact us directly.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form. Please try again or contact us directly.');
    }
};

    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p>Ready to streamline your payroll and recruitment processes? Contact us for a free consultation.</p>
                            
                            <div className="contact-details">
                                <div className="contact-item">
                                    <h3>Email</h3>
                                    <p>info@hangoconsulting.com</p>
                                </div>
                                <div className="contact-item">
                                    <h3>Phone</h3>
                                    <p>(123) 456-7890</p>
                                </div>
                                <div className="contact-item">
                                    <h3>Address</h3>
                                    <p>123 Business Avenue<br />City, State 12345</p>
                                </div>
                                <div className="contact-item">
                                    <h3>Business Hours</h3>
                                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h2>Send us a Message</h2>
                            <p className="form-notice">
                                <strong>Note:</strong> This will open your email client to send us a message.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company Name"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <select name="service" value={formData.service} onChange={handleChange}>
                                        <option value="">Select Service</option>
                                        <option value="payroll">Payroll Services</option>
                                        <option value="recruitment">Recruitment Services</option>
                                        <option value="both">Both Services</option>
                                        <option value="consultation">General Consultation</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message *"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-orange">
                                    Open Email to Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
