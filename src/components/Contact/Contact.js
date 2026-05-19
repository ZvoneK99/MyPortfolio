import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Wire up EmailJS here when ready:
    // await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY');
    setTimeout(() => setStatus('sent'), 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <div className="section-divider" />
        </motion.div>

        <Row className="justify-content-center gy-5">
          <Col lg={5}>
            <motion.div
              className="contact-info glass-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h4 className="contact-info-title">Let's work together</h4>
              <p className="contact-info-text">
                I'm currently open to new opportunities. Whether you have a project in mind,
                want to collaborate, or just want to say hi — my inbox is open.
              </p>
              <div className="contact-links">
                <a href="mailto:zvone.kozull1999@gmail.com" className="contact-link-item">
                  <div className="contact-link-icon"><FaEnvelope /></div>
                  <div>
                    <div className="contact-link-label">Email</div>
                    <div className="contact-link-value">zvone.kozull1999@gmail.com</div>
                  </div>
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link-item">
                  <div className="contact-link-icon"><FaGithub /></div>
                  <div>
                    <div className="contact-link-label">GitHub</div>
                    <div className="contact-link-value">github.com/zvonimirkozul</div>
                  </div>
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="contact-link-item">
                  <div className="contact-link-icon"><FaLinkedin /></div>
                  <div>
                    <div className="contact-link-label">LinkedIn</div>
                    <div className="contact-link-value">linkedin.com/in/zvonimirkozul</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              className="contact-form-card glass-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {status === 'sent' ? (
                <div className="form-success">
                  <FaPaperPlane className="success-icon" />
                  <h5>Message sent!</h5>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label-custom">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      className="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom">Email</label>
                    <input
                      type="email"
                      name="reply_to"
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom">Message</label>
                    <textarea
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary-glass submit-btn"
                    disabled={status === 'sending'}
                  >
                    <FaPaperPlane className="me-2" />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
