import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h2 className="hero-subtitle">Hello, I'm</h2>
                    <h1 className="hero-title">
                        Shiv Sharan <span className="text-gradient">Kumar</span>
                    </h1>
                    <p className="hero-description">
                        Full Stack Developer & AI Engineer specializing in building intelligent systems,
                        from microscopic image analysis to cloud-native applications.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn">View My Work</a>
                        <a
                            href="https://www.linkedin.com/in/shiv-sharan-kumar-93aa3219b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    {/* Abstract visual or placeholder for 3D element */}
                    <div className="glow-circle"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
