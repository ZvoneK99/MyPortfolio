import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaBuilding } from 'react-icons/fa';
import { projects } from '../../data/projects';
import './Projects.css';

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <Row className="gy-4">
          {projects.map((project, i) => (
            <Col lg={4} md={6} key={project.id}>
              <motion.div
                className="project-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="project-header">
                  <div className="project-dots"><span /><span /><span /></div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="project-link" aria-label="Live">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                {project.org && (
                  <span className={`org-badge org-badge--${project.org === 'AVE STUDIO' ? 'ave' : project.org === 'FSRE' ? 'fsre' : 'personal'}`}>
                    <FaBuilding className="org-badge-icon" /> {project.org}
                  </span>
                )}
                <h5 className="project-title">{t(`projects.p${project.id}title`)}</h5>
                <p className="project-description">{t(`projects.p${project.id}desc`)}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
