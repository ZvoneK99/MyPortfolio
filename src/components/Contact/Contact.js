import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'service_drovi6g',
        'template_oo4v94q',
        formRef.current,
        'oRXC_lwxxWF3J_8zt'
      );
      setStatus('sent');
    } catch {
      setStatus('error');
    }
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
          <h2 className="section-title">
            {t('contact.title')} <span className="gradient-text">{t('contact.titleHighlight')}</span>
          </h2>
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
              <h4 className="contact-info-title">{t('contact.infoTitle')}</h4>
              <p className="contact-info-text">{t('contact.infoText')}</p>
              <div className="contact-links">
                <a href="mailto:kozulzvone@gmail.com" className="contact-link-item">
                  <div className="contact-link-icon"><FaEnvelope /></div>
                  <div>
                    <div className="contact-link-label">{t('contact.labelEmail')}</div>
                    <div className="contact-link-value">kozulzvone@gmail.com</div>
                  </div>
                </a>
                <a href="https://github.com/ZvoneK99" target="_blank" rel="noreferrer" className="contact-link-item">
                  <div className="contact-link-icon"><FaGithub /></div>
                  <div>
                    <div className="contact-link-label">{t('contact.labelGitHub')}</div>
                    <div className="contact-link-value">github.com/ZvoneK99</div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/zvonimir-kozul/" target="_blank" rel="noreferrer" className="contact-link-item">
                  <div className="contact-link-icon"><FaLinkedin /></div>
                  <div>
                    <div className="contact-link-label">{t('contact.labelLinkedIn')}</div>
                    <div className="contact-link-value">linkedin.com/in/Zvonimir Kožul</div>
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
                  <h5>{t('contact.successTitle')}</h5>
                  <p>{t('contact.successText')}</p>
                </div>
              ) : status === 'error' ? (
                <div className="form-success">
                  <h5>{t('contact.errorTitle')}</h5>
                  <p>{t('contact.errorText')}</p>
                  <button className="btn-outline-glass mt-3" onClick={() => setStatus('idle')}>{t('contact.errorRetry')}</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label-custom">{t('contact.formName')}</label>
                    <input type="text" name="from_name" className="form-input" placeholder={t('contact.formNamePlaceholder')} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom">{t('contact.formEmail')}</label>
                    <input type="email" name="reply_to" className="form-input" placeholder={t('contact.formEmailPlaceholder')} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label-custom">{t('contact.formMessage')}</label>
                    <textarea name="message" className="form-input form-textarea" placeholder={t('contact.formMessagePlaceholder')} rows={5} required />
                  </div>
                  <button type="submit" className="btn-primary-glass submit-btn" disabled={status === 'sending'}>
                    <FaPaperPlane className="me-2" />
                    {status === 'sending' ? t('contact.sending') : t('contact.send')}
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
