import React from 'react';
import Header from '@/components/content/header';
import Footer from '@/components/content/footer';
import Image from 'next/image';

const About: React.FC = () => {
    const skills = [
        'Développement Frontend',
        'Développement Backend',
        'Intelligence Artificielle',
        'DevOps',
        'UI/UX Design'
    ];

    return (
        <>
            <Header />
            <main className="container about-page">
                <section className="hero">
                    <h1>À propos de moi</h1>
                    <Image
                        src="/path-to-your-profile-image.jpg"
                        alt="Votre nom"
                        width={200}
                        height={200}
                        className="profile-image"
                    />
                    <p className="intro">Je suis un développeur passionné par la création d&aposapplications web innovantes et performantes.</p>
                </section>

                <section className="skills">
                    <h2>Mes compétences</h2>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <i className="fas fa-check-circle"></i>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="journey">
                    <h2>Mon parcours</h2>
                    <ul className="journey-list">
                        <li>
                            <strong>2020 - Présent:</strong> Développeur Full Stack Senior chez TechCorp
                        </li>
                        <li>
                            <strong>2018 - 2020:</strong> Développeur Frontend chez WebInnovate
                        </li>
                        <li>
                            <strong>2016 - 2018:</strong> Stage en développement chez StartupXYZ
                        </li>
                    </ul>
                </section>

                <section className="projects">
                    <h2>Projets notables</h2>
                    <div className="project-grid">
                        <div className="project-card">
                            <h3>Projet A</h3>
                            <p>Application web de gestion de tâches.</p>
                        </div>
                        <div className="project-card">
                            <h3>Projet B</h3>
                            <p>Plateforme e-commerce avec IA.</p>
                        </div>
                        {/* Ajoutez d'autres projets si nécessaire */}
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default About;
