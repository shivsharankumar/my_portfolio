import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // We'll create this minimal file or handle in index.css

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        Shiv<span className="text-gradient">.Dev</span>
                    </Link>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li>
                                <a
                                    href="https://github.com/shivsharankumar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-social"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/shiv-sharan-kumar-93aa3219b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-social"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                {children}
            </main>

            <footer className="footer">
                <div className="container footer-content">
                    <p>&copy; {new Date().getFullYear()} Shiv Sharan Kumar. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="https://github.com/shivsharankumar" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/shiv-sharan-kumar-93aa3219b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
