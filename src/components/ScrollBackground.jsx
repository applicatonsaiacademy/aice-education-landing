import { useState, useEffect } from 'react'

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const p1 = scrollY * 0.12
  const p2 = scrollY * -0.08
  const p3 = scrollY * 0.06
  const p4 = scrollY * -0.1
  const p5 = scrollY * 0.05
  const p6 = scrollY * -0.07

  return (
    <div className="scroll-bg" aria-hidden="true">
      <div className="scroll-bg-parallax" style={{ transform: `translate(${p1 * 0.5}px, ${p1}px)` }}>
        <div className="scroll-bg-blob scroll-bg-blob-1 scroll-bg-float" />
      </div>
      <div className="scroll-bg-parallax" style={{ transform: `translate(${-p2}px, ${p2 * 0.7}px)` }}>
        <div className="scroll-bg-blob scroll-bg-blob-2 scroll-bg-float-alt" />
      </div>
      <div className="scroll-bg-parallax" style={{ transform: `translate(${p3 * 0.4}px, ${p3}px)` }}>
        <div className="scroll-bg-blob scroll-bg-blob-3 scroll-bg-float" />
      </div>
      <div className="scroll-bg-parallax" style={{ transform: `translate(${p4}px, ${-p4 * 0.5}px)` }}>
        <div className="scroll-bg-blob scroll-bg-blob-4 scroll-bg-float-alt" />
      </div>
      <div className="scroll-bg-parallax" style={{ transform: `translate(${p5}px, ${p5 * 0.6}px)` }}>
        <div className="scroll-bg-circle scroll-bg-circle-1 scroll-bg-float" />
      </div>
      <div className="scroll-bg-parallax" style={{ transform: `translate(${-p6 * 0.5}px, ${p6}px)` }}>
        <div className="scroll-bg-circle scroll-bg-circle-2 scroll-bg-float-alt" />
      </div>
      <div className="scroll-bg-parallax" style={{ transform: `translate(${p3}px, ${-p3}px)` }}>
        <div className="scroll-bg-circle scroll-bg-circle-3 scroll-bg-float" />
      </div>
    </div>
  )
}
