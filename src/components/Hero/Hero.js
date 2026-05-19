import React, { useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const particlesOptions = {
  particles: {
    number: { value: 55, density: { enable: true, value_area: 900 } },
    color: { value: ['#06B6D4', '#3B82F6', '#8B5CF6'] },
    shape: { type: 'circle' },
    opacity: { value: 0.45, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1 } },
    size: { value: 2.5, random: true },
    links: {
      enable: true,
      distance: 130,
      color: '#06B6D4',
      opacity: 0.12,
      width: 1,
    },
    move: { enable: true, speed: 1.0, direction: 'none', random: true, out_mode: 'out' },
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: false } },
    modes: { repulse: { distance: 90, duration: 0.4 } },
  },
  retina_detect: true,
};

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="particles-canvas" />

      <Container className="hero-container">
        <Row className="align-items-center hero-row">
          <Col lg={7} className="hero-text-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <motion.p
                className="hero-greeting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hi there, I'm
              </motion.p>

              <motion.h1
                className="hero-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Zvonimir <span className="gradient-text">Kožul</span>
              </motion.h1>

              <motion.h2
                className="hero-role"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
              >
                Software Engineer
              </motion.h2>

              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Full Stack Developer | .NET · React · MySQL
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                <Link to="projects" smooth duration={600} offset={-70}>
                  <button className="btn-primary-glass hero-btn">View Projects</button>
                </Link>
                <a href="/cv.pdf" download className="hero-btn-link">
                  <button className="btn-outline-glass hero-btn">
                    <FaFileDownload className="me-2" /> Download CV
                  </button>
                </a>
              </motion.div>

              <motion.div
                className="hero-socials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="mailto:zvone.kozull1999@gmail.com" className="social-icon" aria-label="Email">
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

        <motion.div
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Link to="about" smooth duration={600} offset={-70} className="scroll-link">
            <FaArrowDown className="scroll-arrow" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
