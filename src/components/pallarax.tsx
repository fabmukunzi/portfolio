import { motion, useScroll, useTransform } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

interface ParallaxComponentProps {
  children: ReactNode;
  offset?: number;
}

const ParallaxComponent: React.FC<ParallaxComponentProps> = ({ children, offset = 50 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

export default ParallaxComponent;
