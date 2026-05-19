import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-inner">
          <span className="footer-brand">ZK<span className="brand-dot">.</span></span>
          <p className="footer-text">
            Built with <FaHeart className="heart-icon" /> using React &amp; Bootstrap
          </p>
          <div className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer-social" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:zvone.kozull1999@gmail.com" className="footer-social" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Zvonimir Kožul. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
