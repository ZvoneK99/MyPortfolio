import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function NavbarComponent() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'hr' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('portfolio-lang', next);
  };

  const navLinks = [
    { key: 'nav.about', to: 'about' },
    { key: 'nav.skills', to: 'skills' },
    { key: 'nav.projects', to: 'projects' },
    { key: 'nav.experience', to: 'experience' },
    { key: 'nav.contact', to: 'contact' },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`nav-glass${scrolled ? ' scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="/" className="brand-name">
          ZK<span className="brand-dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse" className="nav-toggle" />
        <Navbar.Collapse id="nav-collapse">
          <Nav className="ms-auto align-items-lg-center">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={600}
                offset={-70}
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <button className="lang-switcher" onClick={toggleLang} aria-label="Switch language">
              <span className={i18n.language === 'en' ? 'lang-active' : ''}>EN</span>
              <span className="lang-sep">|</span>
              <span className={i18n.language === 'hr' ? 'lang-active' : ''}>HR</span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
