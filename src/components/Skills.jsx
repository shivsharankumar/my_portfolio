import React from 'react';
import './Skills.css';

const skills = [
    { category: "Frontend", items: ["React", "HTML/CSS", "Streamlit", "JavaScript"] },
    { category: "Backend & Cloud", items: ["Python", "AWS", "Django", "FastAPI", "Flask", "Azure", "API Design"] },
    { category: "AI & Data", items: ["Deep Learning", "Machine Learning", "LangChain", "RAG", "FAISS", "Hugging Face","NLP", "Data Analysis"] }
];

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical <span className="text-gradient">Expertise</span></h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-card">
                            <h3 className="skill-category">{skillGroup.category}</h3>
                            <div className="skill-tags">
                                {skillGroup.items.map(item => (
                                    <span key={item} className="skill-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
