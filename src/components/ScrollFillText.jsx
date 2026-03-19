import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ScrollFillText({ text, className }) {
  const container = useRef(null);
  
  // We track the scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 85%', 'end 50%'],
  });

  const words = text.split(' ');

  return (
    <div
      ref={container}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        columnGap: '0.25em',
        rowGap: '0.1em',
        lineHeight: 1.1,
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word 
            key={i} 
            word={word} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </div>
  );
}

const Word = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [16, 0]);
  const scale = useTransform(progress, range, [0.95, 1]);

  return (
    <motion.span style={{ opacity, y, scale, display: 'inline-block', transformOrigin: 'bottom center' }}>
      {word}
    </motion.span>
  );
};
