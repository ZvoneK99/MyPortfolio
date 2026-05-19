import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-inner">
          <span className="footer-brand">ZK<span className="brand-dot">.</span></span>
          <p className="footer-text">
            {t('footer.built')} <FaHeart className="heart-icon" /> {t('footer.using')}
          </p>
          <div className="footer-socials">
            <a href="https://github.com/ZvoneK99" target="_blank" rel="noreferrer" className="footer-social" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/zvonimir-kozul/" target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:kozulzvone@gmail.com" className="footer-social" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Zvonimir Kožul. {t('footer.rights')}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
