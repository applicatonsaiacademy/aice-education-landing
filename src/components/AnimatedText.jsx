import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function AnimatedText({
  text,
  el: Wrapper = 'p',
  className = '',
  once = true,
  delay = 0,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-10%' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  let globalCharIndex = 0;

  return (
    <Wrapper className={className} ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        aria-label={text}
      >
        {text.split(" ").map((word, wordIndex, wordsArray) => (
          <span key={wordIndex}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {word.split("").map((char, charIndex) => {
                const currentDelay = delay + (globalCharIndex * 0.02);
                globalCharIndex++;
                
                return (
                  <span 
                    key={charIndex} 
                    style={{ 
                      display: 'inline-block', 
                      overflow: 'hidden',
                      verticalAlign: 'bottom',
                      paddingTop: '0.1em',
                      paddingBottom: '0.1em',
                      marginTop: '-0.1em',
                      marginBottom: '-0.1em'
                    }}
                  >
                    <motion.span
                      style={{ 
                        display: 'inline-block',
                      }}
                      variants={{
                        hidden: { y: "100%" },
                        visible: {
                          y: "0%",
                          transition: { 
                            duration: 0.8,
                            ease: [0.2, 1, 0.3, 1],
                            delay: currentDelay
                          }
                        }
                      }}
                    >
                      {char}
                    </motion.span>
                  </span>
                )
              })}
            </span>
            {wordIndex !== wordsArray.length - 1 && " "}
          </span>
        ))}
      </motion.div>
    </Wrapper>
  )
}
