import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profilePhoto from '../../Datoteke/profilna.jpeg';
import './Hero.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />

      <Container className="hero-container">
        <Row className="align-items-center hero-row">
          <Col lg={7} className="hero-text-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.div className="hero-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                <span className="status-dot" />
                {t('hero.status')}
              </motion.div>

              <motion.p className="hero-greeting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                {t('hero.greeting')}
              </motion.p>

              <motion.h1 className="hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}>
                Zvonimir Kožul
              </motion.h1>

              <motion.h2 className="hero-role" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
                {t('hero.role')}
              </motion.h2>

              <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
                <span className="tagline-prompt">$</span> {t('hero.tagline')}
              </motion.p>

              <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                <Link to="projects" smooth duration={600} offset={-70}>
                  <button className="btn-terminal-primary hero-btn">{t('hero.viewProjects')} →</button>
                </Link>
                <a href="/cv.pdf" download className="hero-btn-link">
                  <button className="btn-terminal-outline hero-btn">
                    <FaFileDownload className="me-2" /> {t('hero.downloadCV')}
                  </button>
                </a>
              </motion.div>

              <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}>
                <a href="https://github.com/ZvoneK99" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/zvonimir-kozul/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="mailto:kozulzvone@gmail.com" className="social-icon" aria-label="Email">
                  <FaEnvelope />
                </a>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={5} className="hero-card-col">
            <motion.div
              className="terminal-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            >
              <div className="terminal-card-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-card-path">~/zvonimir-kozul/profile</span>
              </div>
              <div className="terminal-card-body">
                <div className="terminal-photo-frame">
                  <img src={profilePhoto} alt="Zvonimir Kožul" className="terminal-photo" />
                </div>

                <div className="terminal-field">
                  <span className="field-key">// NAME</span>
                  <span className="field-value">Zvonimir Kožul</span>
                </div>
                <div className="terminal-field">
                  <span className="field-key">// ROLE</span>
                  <span className="field-value">{t('hero.role')}</span>
                </div>
                <div className="terminal-field">
                  <span className="field-key">// LOCATION</span>
                  <span className="field-value">Široki Brijeg, BiH</span>
                </div>
                <div className="terminal-field">
                  <span className="field-key">// STATUS</span>
                  <span className="field-value status-value">{t('hero.status')}</span>
                </div>

                <div className="terminal-prompt-line">
                  <span className="tagline-prompt">$</span> connect --target zvonimirkozul.dev<span className="cursor-blink">▌</span>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div className="scroll-down" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <Link to="about" smooth duration={600} offset={-70} className="scroll-link">
            <FaArrowDown className="scroll-arrow" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
