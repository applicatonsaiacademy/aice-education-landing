import ScrollReveal from './ScrollReveal'

const steps = [
  { title: 'Start with your brief', desc: 'Define goals, audiences, guardrails. AICE tunes to your context.' },
  { title: 'Scan the culture graph', desc: 'Live signals across social, search, forums to find winning angles.' },
  { title: 'Create & adapt', desc: 'Concepts, scripts, assets, and variants tuned to each channel.' },
  { title: 'Ship, learn, loop', desc: 'Deploy, watch lift, and iterate with human + AI in the loop.' },
]

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="container">
        <ScrollReveal>
          <div className="pillars-head">
            <span className="section-label">How it works</span>
            <h2 className="section-title">Brief → Signals → Assets → Lift</h2>
            <p className="section-subtitle">
              AICE mirrors the way great AI product teams operate: rapid signal intake, focused creation, fast deployment.
            </p>
          </div>
        </ScrollReveal>
        <div className="how-grid">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08} distance={26}>
              <div className="how-card">
                <div className="how-step">0{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
