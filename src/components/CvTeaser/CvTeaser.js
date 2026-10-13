import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaLock, FaUnlockAlt } from 'react-icons/fa';
import cvFile from "../../Datoteke/CV/Zvonimir Kožul's Resume.pdf";
import './CvTeaser.css';

const GLYPHS = '01█▓▒░#@$%&*+=<>/\\';
const LOG_THRESHOLDS = [5, 30, 60, 90];

const randomGlyphs = (length) =>
  Array.from({ length }, () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join('');

function Scramble({ length }) {
  const [text, setText] = useState(() => randomGlyphs(length));

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => setText(randomGlyphs(length)), 90);
    return () => clearInterval(id);
  }, [length]);

  return <>{text}</>;
}

function CvTeaser() {
  const { t } = useTranslation();
  const [phase, setPhase] = useState('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase !== 'running') return undefined;
    const id = setInterval(() => {
      setProgress((p) => Math.min(99, p + 1 + Math.floor(Math.random() * 3)));
    }, 45);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === 'running' && progress >= 99) setPhase('denied');
  }, [phase, progress]);

  const startDecrypt = () => {
    setProgress(0);
    setPhase('running');
  };

  const whatsappUrl = 'https://wa.me/38763355067';

  const openFields = [
    { key: 'NAME', value: 'Zvonimir Kožul' },
    { key: 'ROLE', value: t('hero.role') },
    { key: 'STACK', value: 'C# · .NET · React · MySQL' },
    { key: 'EXPERIENCE', value: `${t('experience.job1company')} · ${t('experience.job1period')}` },
  ];
  const lockedFields = ['EDUCATION', 'LANGUAGES', 'PHONE', 'REFERENCES'];
  const logs = [1, 2, 3, 4].map((n) => t(`cv.log${n}`));
  const visibleLogs = LOG_THRESHOLDS.filter((limit) => progress >= limit || phase === 'denied').length;

  return (
    <section id="cv" className="cv-section">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t('cv.title')} <span className="gradient-text">{t('cv.titleHighlight')}</span>
          </h2>
          <div className="section-divider" />
          <p className="cv-subtitle">{t('cv.subtitle')}</p>
        </motion.div>

        <motion.div
          className={`cv-card${phase === 'denied' ? ' cv-card-denied' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cv-sweep" aria-hidden="true" />

          <div className="cv-card-header">
            <span className="cv-dot cv-dot-red" />
            <span className="cv-dot cv-dot-yellow" />
            <span className="cv-dot cv-dot-green" />
            <span className="cv-card-path">~/documents/cv.pdf</span>
            <span className="cv-status">
              <FaLock /> {t('cv.encrypted')}
            </span>
          </div>

          <div className="cv-card-body">
            {openFields.map((f) => (
              <div className="cv-field" key={f.key}>
                <span className="cv-key">{`// ${f.key}`}</span>
                <span className="cv-value">{f.value}</span>
              </div>
            ))}

            {lockedFields.map((key) => (
              <div className="cv-field" key={key}>
                <span className="cv-key">{`// ${key}`}</span>
                <span className="cv-value cv-redacted" aria-hidden="true">
                  <Scramble length={14} />
                </span>
              </div>
            ))}

            <div className="cv-terminal">
              <div className="cv-prompt">
                <span className="cv-prompt-symbol">$</span> {t('cv.prompt')}
              </div>

              {phase !== 'idle' && (
                <>
                  <div className="cv-logs">
                    {logs.slice(0, visibleLogs).map((line) => (
                      <div key={line}>{`> ${line}`}</div>
                    ))}
                  </div>
                  <div className="cv-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                    <div className="cv-progress-fill" style={{ width: `${progress}%` }} />
                    <span className="cv-progress-label">{progress}%</span>
                  </div>
                </>
              )}

              {phase === 'denied' && (
                <div className="cv-denied">
                  <div className="cv-denied-title">{t('cv.denied')}</div>
                  <div className="cv-denied-text">{t('cv.joke')}</div>
                </div>
              )}
            </div>

            <div className="cv-actions">
              {phase === 'denied' ? (
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary-glass cv-decrypt">
                  <FaWhatsapp className="me-2" /> {t('cv.whatsapp')}
                </a>
              ) : (
                <button
                  type="button"
                  className="btn-primary-glass cv-decrypt"
                  onClick={startDecrypt}
                  disabled={phase === 'running'}
                >
                  <FaUnlockAlt className="me-2" /> {phase === 'running' ? t('cv.decrypting') : t('cv.decrypt')}
                </button>
              )}
              <a href={cvFile} download="Zvonimir Kožul's Resume.pdf" className="cv-direct">
                {t('cv.directDownload')}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default CvTeaser;
