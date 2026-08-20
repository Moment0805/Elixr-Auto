import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { pageVariants } from '../lib/animations';

// Wraps each route with a smooth enter/exit page transition.
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
