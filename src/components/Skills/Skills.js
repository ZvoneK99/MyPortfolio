import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skillCategories } from '../../data/skills';
import './Skills.css';

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <Row className="gy-5">
          {skillCategories.map((cat, catIndex) => (
            <Col lg={4} md={6} key={cat.category}>
              <motion.div
                className="skill-category glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              >
                <h4 className="category-title">{cat.category}</h4>
                <div className="skills-grid">
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + i * 0.06 }}
                      whileHover={{ scale: 1.07, y: -3 }}
                    >
                      <skill.Icon style={{ color: skill.color, fontSize: '1.6rem' }} />
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
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

export default Skills;
