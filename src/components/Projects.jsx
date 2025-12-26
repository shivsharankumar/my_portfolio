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
        github: "https://github.com/shivsharankumar/AnyDocChat-Pro-.git",
        live: "https://anydocchatpro.streamlit.app/",
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
        live: "https://www.retimer.com.au/",
        github: "https://github.com/shivsharankumar/Ecommerce-chatbot.git",
        tags: ["RAG", "Chatbot", "AI"],
        description: "An AI-powered chatbot implemented for the Re-Timer website to assist users.",
        details: null
    },
    {
        id: 5,
        title: "Analytics Tool",
        company: "Perceptiviti",
        tags: ["Python", "Django", "React", "Material-UI", "ReactChartjs2"],
        description: "Interactive analytics platform improving data visualization efficiency.",
        details: (
            <div className="project-details">
                <ul>
                    <li>Developed a Python Django and React analytics tool, increasing data visualization efficiency.</li>
                    <li>Utilized Material-UI and ReactChartjs2 for improved UI and chart creation.</li>
                    <li>Implemented dynamic dashboard generation from JSON data, reducing setup time.</li>
                    <li>Processed database data into JSON to accelerate frontend visualization.</li>
                    <li>Created an interactive workspace for query discussions and insights, including automated email notifications.</li>
                </ul>
            </div>
        )
    },
    {
        id: 6,
        title: "MediCoder",
        company: "Perceptiviti",
        tags: ["NLP", "Python", "Django", "React", "Healthcare"],
        description: "NLP-based application converting disease descriptions into ICD-10-CM codes.",
        details: (
            <div className="project-details">
                <ul>
                    <li>Developed "MediCoder" – an NLP-based project using Python Django (backend) and React (frontend).</li>
                    <li>Designed a system to convert disease descriptions into ICD-10-CM codes using NLP.</li>
                    <li>Demonstrated expertise in Python and React for full-stack development.</li>
                    <li>Improved healthcare data management with automated disease description coding.</li>
                </ul>
            </div>
        )
    },
    {
        id: 7,
        title: "Sleep Coach Mini App",
        company: "Personal Project",
        tags: ["Streamlit", "Groq LLM", "Python", "Pandas", "Data Analysis", "AI"],
        description: "A modern, production-ready sleep analysis tool that generates personalized coaching recommendations.",
        github: "https://github.com/shivsharankumar/Sleep-Reccomended-System.git",
        live: "https://sleep-reccomended-system.streamlit.app/",
        details: (
            <div className="project-details">
                <h4>Features:</h4>
                <ul>
                    <li><strong>AI Coach:</strong> Integrated with Groq LLM for personalized feedback.</li>
                    <li><strong>Sleep Metrics:</strong> Calculates average sleep, debt/surplus, and consistency stats.</li>
                    <li><strong>Risk Assessment:</strong> Heuristic detection of potential issues like insomnia.</li>
                    <li><strong>Mobile-Friendly Reports:</strong> Generates downloadable, beautifully styled HTML reports.</li>
                    <li><strong>CSV Upload:</strong> Easy upload of sleep diaries for instant analysis.</li>
                </ul>
            </div>
        )
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
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-text">
                                        GitHub &rarr;
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-text">
                                        Live Demo &rarr;
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
