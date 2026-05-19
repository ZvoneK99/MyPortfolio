import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaCode } from 'react-icons/fa';
import './About.css';

const stats = [
  { icon: <FaCode />, label: 'Technologies', value: '10+' },
  { icon: <FaBriefcase />, label: 'Projects', value: '6+' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Croatia' },
];

function About() {
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
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
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
              <p className="about-text">
                Hi, I'm <strong className="gradient-text">Zvonimir Kožul</strong> — a passionate
                Full Stack Developer based in Croatia. I specialize in building robust web applications
                from the ground up, combining a clean, responsive frontend with a solid, scalable backend.
              </p>
              <p className="about-text">
                On the frontend I work with <strong>React</strong> and modern JavaScript/TypeScript.
                On the backend I build APIs and services with <strong>C# / .NET</strong>, using
                <strong> MySQL</strong> as my go-to relational database.
              </p>
              <p className="about-text">
                I love turning complex problems into simple, beautiful solutions — and I'm always looking
                for the next challenge to grow as an engineer.
              </p>
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
                    whileHover={{ scale: 1.02, borderColor: 'rgba(6,182,212,0.3)' }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
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
