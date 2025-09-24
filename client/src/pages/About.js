import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="about-text">
                        <h2>Our Mission</h2>
                        <p>
                            At Hango Consulting, we are dedicated to providing exceptional payroll 
                            and recruitment services with efficiency, accuracy, and the perfect match 
                            for your business needs. Our team of experienced professionals is committed 
                            to delivering personalized solutions that drive your business forward.
                        </p>
                        <p>
                            With years of experience in the industry, we understand the challenges 
                            businesses face in managing their workforce and ensuring compliance 
                            with statutory requirements. We pride ourselves on building long-term 
                            partnerships with our clients based on trust and results.
                        </p>
                        
                        <h3>Why Choose Us?</h3>
                        <div className="features-grid">
                            <div className="feature">
                                <h4>Expertise</h4>
                                <p>Deep industry knowledge and technical expertise</p>
                            </div>
                            <div className="feature">
                                <h4>Reliability</h4>
                                <p>Consistent, dependable service you can count on</p>
                            </div>
                            <div className="feature">
                                <h4>Personalized Service</h4>
                                <p>Customized solutions for your unique needs</p>
                            </div>
                            <div className="feature">
                                <h4>Compliance</h4>
                                <p>Ensuring full statutory compliance and peace of mind</p>
                            </div>
                            <div className="feature">
                                <h4>Commitment</h4>
                                <p>A commitment to delivering quality services, every time</p>
                            </div>
                            <div className="feature">
                                <h4>Efficiency</h4>
                                <p>Ensuring that value is delivered on time</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;