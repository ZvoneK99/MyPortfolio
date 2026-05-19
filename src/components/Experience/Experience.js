import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../../data/experience';
import './Experience.css';

function Experience() {
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
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="timeline-node">
                <FaBriefcase />
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-role">{exp.role}</h4>
                <p className="timeline-company">{exp.company}</p>
                <ul className="timeline-bullets">
                  {exp.description.map((point, j) => (
                    <li key={j}>{point}</li>
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
