import { motion } from 'framer-motion';

// Wraps any block of content and fades/slides it in the first time
// it scrolls into view — a lightweight stand-in for Framer's
// built-in scroll animations.
export default function Reveal({ children, delay = 0, y = 24, as: Tag = 'div', className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
