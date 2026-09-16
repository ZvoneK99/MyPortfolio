import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/38763355067"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <span className="whatsapp-pulse" />
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
