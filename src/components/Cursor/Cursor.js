import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.css';

function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* dot — snaps to cursor exactly */}
      <motion.div
        className="cursor-dot"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* ring — follows with spring lag */}
      <motion.div
        className="cursor-ring"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}

export default Cursor;
