import React from 'react';
import '../styles/Services.css';

const Services = () => {
    const services = [
        {
            title: "Recruitment Services",
            description: "Comprehensive recruitment solutions to find the perfect candidates for your organization.",
            items: [
                "Advertising job opportunities across multiple platforms",
                "Screening candidates and presenting qualified individuals",
                "Placing candidates in suitable positions",
                "Initiatives for graduate programs and entry-level positions",
                "Background checks and reference verification",
                "Interview coordination and scheduling"
            ]
        },
        {
            title: "Payroll Services",
            description: "Complete payroll management ensuring accuracy and compliance with all regulations.",
            items: [
                "Comprehensive payroll operations and processing",
                "Monthly statutory declaration (EMP201, UIF)",
                "Submissions for third-party payments",
                "Safeguarding compliance with all statutory mandates",
                "ROE, SARS bi-annual and final submissions",
                "Tax calculations and deductions management",
                "Payslip generation and distribution",
                "Leave and attendance management"
            ]
        }
    ];

    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <h1>Our Services</h1>
                </div>
            </section>

            <section className="services-detail">
                <div className="container">
                    {services.map((service, index) => (
                        <div key={index} className="service-detail">
                            <h2>{service.title}</h2>
                            <p className="service-description">{service.description}</p>
                            <ul>
                                {service.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="services-cta">
                <div className="container">
                    <h2>Interested in Our Services?</h2>
                    <p>Contact us today to discuss how we can support your business needs</p>
                    <a href="/contact" className="btn btn-orange">Get Started</a>
                </div>
            </section>
        </div>
    );
};

export default Services;