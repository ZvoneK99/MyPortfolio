import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const DOTS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 14 + 10,
  delay: Math.random() * 8,
  opacity: Math.random() * 0.35 + 0.1,
}));

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-section">
      <div className="particles-canvas" aria-hidden="true">
        {DOTS.map((d) => (
          <span
            key={d.id}
            className="particle"
            style={{
              width: d.size,
              height: d.size,
              left: `${d.x}%`,
              top: `${d.y}%`,
              opacity: d.opacity,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>

      <Container className="hero-container">
        <Row className="align-items-center hero-row">
          <Col lg={7} className="hero-text-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <motion.p className="hero-greeting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                {t('hero.greeting')}
              </motion.p>

              <motion.h1 className="hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
                Zvonimir <span className="gradient-text">Kožul</span>
              </motion.h1>

              <motion.h2 className="hero-role" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>
                {t('hero.role')}
              </motion.h2>

              <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                {t('hero.tagline')}
              </motion.p>

              <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
                <Link to="projects" smooth duration={600} offset={-70}>
                  <button className="btn-primary-glass hero-btn">{t('hero.viewProjects')}</button>
                </Link>
                <a href="/cv.pdf" download className="hero-btn-link">
                  <button className="btn-outline-glass hero-btn">
                    <FaFileDownload className="me-2" /> {t('hero.downloadCV')}
                  </button>
                </a>
              </motion.div>

              <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
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

          <Col lg={5} className="hero-avatar-col">
            <motion.div
              className="avatar-wrapper"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            >
              <div className="avatar-ring-outer">
                <div className="avatar-ring-inner">
                  <div className="avatar-circle">
                    <span className="avatar-initials">ZK</span>
                  </div>
                </div>
              </div>
              <div className="avatar-glow" />
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
