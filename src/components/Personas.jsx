import ScrollReveal from './ScrollReveal'

const personas = [
  {
    title: 'Founders & Leaders',
    bullets: ['Clarity on where to apply AI first', 'Narratives that win customers and investors', 'Systems that scale without headcount'],
  },
  {
    title: 'Marketing & Creative Teams',
    bullets: ['Faster campaign cycles', 'Assets tuned per channel', 'Guardrails for brand/voice safety'],
  },
  {
    title: 'Operators & Rev Teams',
    bullets: ['Automate research & prep', 'Playbooks for outreach & enablement', 'Performance loops with human oversight'],
  },
]

export default function Personas() {
  return (
    <section className="personas-section">
      <div className="container">
        <ScrollReveal>
          <div className="pillars-head">
            <span className="section-label">Built for</span>
            <h2 className="section-title">People who need outcomes fast</h2>
            <p className="section-subtitle">Choose your lane; AICE adapts to founders, leaders, and teams.</p>
          </div>
        </ScrollReveal>
        <div className="personas-grid">
          {personas.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.06} distance={24}>
              <div className="persona-card">
                <div className="persona-tag">Profile {i + 1}</div>
                <h3>{p.title}</h3>
                <ul>
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
