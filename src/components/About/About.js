import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaBriefcase, FaCode } from 'react-icons/fa';
import './About.css';

function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: <FaCode />, labelKey: 'about.statTech', value: '10+' },
    { icon: <FaBriefcase />, labelKey: 'about.statProjects', value: '6+' },
    { icon: <FaMapMarkerAlt />, labelKey: 'about.statLocation', value: 'Široki Brijeg, BiH' },
  ];

  return (
    <section id="about">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <Row className="align-items-center gy-5">
          <Col lg={6}>
            <motion.div
              className="about-card glass-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t('about.bio1') }} />
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t('about.bio2') }} />
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t('about.bio3') }} />
            </motion.div>
          </Col>

          <Col lg={6}>
            <Row className="gy-4">
              {stats.map((stat, i) => (
                <Col xs={12} key={i}>
                  <motion.div
                    className="stat-card glass-card"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{t(stat.labelKey)}</div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
