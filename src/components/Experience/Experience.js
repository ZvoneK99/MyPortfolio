import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      roleKey: 'experience.job1role',
      companyKey: 'experience.job1company',
      periodKey: 'experience.job1period',
      bullets: ['experience.job1b1', 'experience.job1b2', 'experience.job1b3'],
      tags: ['React', 'C#', 'VB.NET', '.NET', 'JavaScript', 'Bootstrap'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t('experience.title')} <span className="gradient-text">{t('experience.titleHighlight')}</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="timeline-node"><FaBriefcase /></div>
              <div className="timeline-card glass-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{t(exp.periodKey)}</span>
                </div>
                <h4 className="timeline-role">{t(exp.roleKey)}</h4>
                <p className="timeline-company">{t(exp.companyKey)}</p>
                <ul className="timeline-bullets">
                  {exp.bullets.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
