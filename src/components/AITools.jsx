import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import ChatGptLogo from '../assets/chatgpt-logo.svg'

const tools = [
  { name: 'ChatGPT', logo: ChatGptLogo },
  { name: 'Google Gemini', logo: 'https://icon.horse/icon/gemini.google.com' },
  { name: 'Microsoft Copilot', logo: 'https://icon.horse/icon/microsoft.com' },
  { name: 'Claude', logo: 'https://icon.horse/icon/claude.ai' },
  { name: 'Perplexity', logo: 'https://icon.horse/icon/www.perplexity.ai' },
  { name: 'Zapier', logo: 'https://icon.horse/icon/zapier.com' },
  { name: 'Lindy.ai', logo: 'https://icon.horse/icon/www.lindy.ai' },
  { name: 'Julius AI', logo: 'https://icon.horse/icon/julius.ai' },
  { name: 'Gamma', logo: 'https://icon.horse/icon/gamma.app' },
  { name: 'NotebookLM', logo: 'https://icon.horse/icon/notebooklm.google' },
  { name: 'Canva', logo: 'https://icon.horse/icon/www.canva.com' },
  { name: 'HubSpot AI', logo: 'https://icon.horse/icon/www.hubspot.com' },
  { name: 'Jasper', logo: 'https://icon.horse/icon/www.jasper.ai' },
  { name: 'Clay', logo: 'https://icon.horse/icon/www.clay.com' },
  { name: 'ElevenLabs', logo: 'https://icon.horse/icon/elevenlabs.io' },
  { name: 'Synthesia', logo: 'https://icon.horse/icon/www.synthesia.io' },
  { name: 'Runway ML', logo: 'https://icon.horse/icon/runwayml.com' },
  { name: 'Glean', logo: 'https://icon.horse/icon/www.glean.com' },
  { name: 'Motion', logo: 'https://icon.horse/icon/www.usemotion.com' },
  { name: 'n8n', logo: 'https://icon.horse/icon/n8n.io' },
]

function ToolChip({ name, logo }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="ai-tool-chip">
      {!failed && logo ? (
        <img
          src={logo}
          alt=""
          className="ai-tool-chip-logo"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="ai-tool-chip-fallback">{initials}</div>
      )}
      <span className="ai-tool-chip-name">{name}</span>
    </div>
  )
}

// Split tools into two rows
const row1 = [...tools.slice(0, 10), ...tools.slice(0, 10)]
const row2 = [...tools.slice(10), ...tools.slice(10)]

export default function AITools() {
  return (
    <section className="ai-tools-minimal">
      <div className="container">
        <ScrollReveal>
          <div className="text-center">
            <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Tools You'll Master</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>
              The AI stack that matters in 2026
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="ai-tools-marquee-wrap">
        <div className="ai-tools-marquee-row">
          {row1.map((tool, i) => (
            <ToolChip key={`r1-${i}`} name={tool.name} logo={tool.logo} />
          ))}
        </div>
        <div className="ai-tools-marquee-row reverse">
          {row2.map((tool, i) => (
            <ToolChip key={`r2-${i}`} name={tool.name} logo={tool.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
