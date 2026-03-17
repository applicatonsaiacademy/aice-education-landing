import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import ChatGptLogo from '../assets/chatgpt-logo.png'

function ToolLogo({ name, logo }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .replace(/\s*&\s*a lot more!.*/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase() || '?'
  const showFallback = failed || !logo
  return (
    <div className="tool-logo-wrapper">
      {showFallback ? (
        <span className="tool-logo-fallback" aria-hidden>{initials.slice(0, 2)}</span>
      ) : (
        <img
          src={logo}
          alt=""
          className="tool-logo-img"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

const tools = [
  // Foundational & Productivity
  { name: 'ChatGPT', category: 'Foundational AI', logo: ChatGptLogo },
  { name: 'Google Gemini', category: 'Foundational AI', logo: 'https://icon.horse/icon/gemini.google.com' },
  { name: 'Microsoft 365 Copilot', category: 'Productivity AI', logo: 'https://icon.horse/icon/microsoft.com' },
  { name: 'Claude 4', category: 'Foundational AI', logo: 'https://icon.horse/icon/claude.ai' },

  // Automation & Agents
  { name: 'Zapier Central', category: 'Automation AI', logo: 'https://icon.horse/icon/zapier.com' },
  { name: 'Lindy.ai', category: 'AI Agents', logo: 'https://icon.horse/icon/www.lindy.ai' },
  { name: 'CrewAI', category: 'AI Agents', logo: 'https://icon.horse/icon/www.crewai.com' },

  // Sales & Marketing
  { name: 'HubSpot AI CRM', category: 'Sales & Marketing', logo: 'https://icon.horse/icon/www.hubspot.com' },
  { name: 'Jasper AI', category: 'Marketing Content', logo: 'https://icon.horse/icon/www.jasper.ai' },
  { name: 'Clay', category: 'Sales Outreach', logo: 'https://icon.horse/icon/www.clay.com' },
  { name: 'Synthesia', category: 'AI Video', logo: 'https://icon.horse/icon/www.synthesia.io' },

  // Design & Multimedia
  { name: 'Canva Magic Studio', category: 'Design AI', logo: 'https://icon.horse/icon/www.canva.com' },
  { name: 'ElevenLabs', category: 'Voice AI', logo: 'https://icon.horse/icon/elevenlabs.io' },
  { name: 'Adobe Firefly', category: 'Design AI', logo: 'https://icon.horse/icon/firefly.adobe.com' },

  // Operations & Knowledge Management
  { name: 'Motion', category: 'Project Management', logo: 'https://icon.horse/icon/www.usemotion.com' },
  { name: 'Glean', category: 'Knowledge Management', logo: 'https://icon.horse/icon/www.glean.com' },
  { name: 'Perplexity Pages', category: 'AI Research', logo: 'https://icon.horse/icon/www.perplexity.ai' },
  { name: 'Runway ML', category: 'AI Video Editor', logo: 'https://icon.horse/icon/runwayml.com' },
  { name: 'Salesforce Agentforce', category: 'CRM AI Agents', logo: 'https://icon.horse/icon/www.salesforce.com' },
  { name: 'Julius AI', category: 'Data Analysis AI', logo: 'https://icon.horse/icon/julius.ai' },

  { name: '& a lot more!', category: '', isSpecial: true },
]

export default function AITools() {
  return (
    <section className="ai-tools-section">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Latest AI Tools (2026)</h2>
            <p className="section-subtitle mx-auto">
              Master the exact platforms defining the future of work.
            </p>
          </div>
        </ScrollReveal>

        <div className="ai-tools-grid">
          {tools.map((tool, index) => (
            <ScrollReveal key={index} delay={index * 0.05} distance={20}>
              <div className={`ai-tool-card ${tool.isSpecial ? 'special-card' : ''}`}>
                <div className="tool-card-content">
                  {tool.isSpecial ? (
                    <>
                      <div className="tool-logo-wrapper">
                        <span className="tool-logo-more" aria-hidden>+</span>
                      </div>
                      <span className="special-text">{tool.name}</span>
                    </>
                  ) : (
                    <>
                      <ToolLogo name={tool.name} logo={tool.logo} />
                      <h3 className="tool-name">{tool.name}</h3>
                      <p className="tool-category">{tool.category}</p>
                    </>
                  )}
                </div>
                {!tool.isSpecial && <div className="tool-card-bg-effect"></div>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
