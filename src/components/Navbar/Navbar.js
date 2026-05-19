import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navbar.css';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={600}
                offset={-70}
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                {item}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
