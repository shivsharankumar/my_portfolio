import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
                <p className="contact-subtitle">
                    Interested in collaborating or have a project in mind? Let's build something amazing together.
                </p>

                <div className="contact-methods">
                    <a href="mailto:shivsharan47@gmail.com" className="contact-card">
                        <div className="icon">✉️</div>
                        <h3>Email</h3>
                        <p>Send me an email</p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shiv-sharan-kumar-93aa3219b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <div className="icon">💼</div>
                        <h3>LinkedIn</h3>
                        <p>Connect professionally</p>
                    </a>
                    <a
                        href="https://github.com/shivsharankumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <div className="icon">💻</div>
                        <h3>GitHub</h3>
                        <p>View my code</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
