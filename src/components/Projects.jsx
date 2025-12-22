import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: "Blood Smear Analyzer",
        company: "Motherson Technology Service Limited",
        tags: ["React", "Python", "Deep Learning", "AWS S3", "Jetson Nano", "Edge Computing"],
        description: "A comprehensive diagnostic system combining cloud and edge computing for blood smear analysis.",
        details: (
            <div className="project-details">
                <h4>Architecture Highlights:</h4>
                <ul>
                    <li><strong>Machine:</strong> Captures microscopic images of blood smear slides.</li>
                    <li><strong>Edge Device (Jetson Nano):</strong> Local processing unit handling low-latency logic.</li>
                    <li><strong>Server Backend:</strong> Cloud-based core logic for image processing and coordination.</li>
                    <li><strong>Deep Learning Model:</strong> AI inference on images from S3 to generate diagnostic results.</li>
                    <li><strong>HMI App (React):</strong> User interface for command and control.</li>
                </ul>
            </div>
        )
    },
    {
        id: 2,
        title: "AnyDocChat Pro",
        company: "Personal Project",
        tags: ["Streamlit", "LangChain", "Hugging Face", "FAISS", "Groq", "EuriAI"],
        description: "Intelligent document assistant for clinicians and researchers to converse with medical PDFs.",
        details: (
            <div className="project-details">
                <p>Upload PDFs, extract text, and ask natural language questions. Powered by RAG (Retrieval-Augmented Generation) with FAISS indexing and LLM integration.</p>
            </div>
        )
    },
    {
        id: 3,
        title: "Glucose Prediction Model",
        company: "Motherson Technology Service Limited",
        tags: ["Machine Learning", "Data Analysis", "Health Tech"],
        description: "Smart ring mapping with CGM patch data to create glucose prediction models.",
        details: (
            <div className="project-details">
                <p>Generated training data by correlating ring sensor inputs with Continuous Glucose Monitor (CGM) patch data to predict glucose levels.</p>
            </div>
        )
    },
    {
        id: 4,
        title: "RAG Chatbot",
        company: "Motherson Technology Service Limited",
        link: "https://www.retimer.com.au/",
        tags: ["RAG", "Chatbot", "AI"],
        description: "An AI-powered chatbot implemented for the Re-Timer website to assist users.",
        details: null
    }
];

const Projects = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className={`project-card ${expandedId === project.id ? 'expanded' : ''}`}>
                            <div className="project-header">
                                <div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-company">{project.company}</span>
                                </div>
                            </div>

                            <div className="project-tags">
                                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>

                            <p className="project-description">{project.description}</p>

                            {expandedId === project.id && project.details && (
                                <div className="project-expanded-content">
                                    {project.details}
                                </div>
                            )}

                            <div className="project-footer">
                                {project.details && (
                                    <button className="btn-text" onClick={() => toggleExpand(project.id)}>
                                        {expandedId === project.id ? 'Show Less' : 'View Details'}
                                    </button>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-text">
                                        Visit Site &rarr;
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
