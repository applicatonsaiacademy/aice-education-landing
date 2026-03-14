import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

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
  { name: 'Make', category: 'No-code workflow builder', logo: 'https://cdn.simpleicons.org/make' },
  { name: 'Zapier AI', category: 'Automation platform', logo: 'https://cdn.simpleicons.org/zapier' },
  { name: 'n8n', category: 'Workflow automation', logo: 'https://cdn.simpleicons.org/n8n' },
  { name: 'Bardeen AI', category: 'Browser automation', logo: 'https://img.logo.dev/bardeen.ai?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'AgentGPT', category: 'Autonomous AI agents', logo: 'https://img.logo.dev/agentgpt.reworkd.ai?token=pk_9tTeb9l3Re26R16m6yWe9A' },

  { name: 'ChatGPT', category: 'Conversational AI', logo: 'https://cdn.simpleicons.org/openai' },
  { name: 'Claude', category: 'AI writing and reasoning', logo: 'https://cdn.simpleicons.org/anthropic' },
  { name: 'Perplexity AI', category: 'AI search engine', logo: 'https://cdn.simpleicons.org/perplexity' },
  { name: 'Jasper AI', category: 'AI content creator', logo: 'https://cdn.simpleicons.org/jasper' },
  { name: 'Notion AI', category: 'Connected workspace AI', logo: 'https://cdn.simpleicons.org/notion' },

  { name: 'Midjourney', category: 'Text to images/videos', logo: 'https://cdn.simpleicons.org/midjourney' },
  { name: 'Leonardo AI', category: 'Image generation', logo: 'https://img.logo.dev/leonardo.ai?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'Adobe Firefly', category: 'Creative generative AI', logo: 'https://cdn.simpleicons.org/adobe' },
  { name: 'Canva AI', category: 'AI design tools', logo: 'https://cdn.simpleicons.org/canva' },
  { name: 'Magnific AI', category: 'AI image upscaler', logo: 'https://img.logo.dev/magnific.ai?token=pk_9tTeb9l3Re26R16m6yWe9A' },

  { name: 'Runway ML', category: 'AI video editor', logo: 'https://img.logo.dev/runwayml.com?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'Pika AI', category: 'Idea-to-video platform', logo: 'https://img.logo.dev/pika.art?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'Synthesia', category: 'AI video generator', logo: 'https://img.logo.dev/synthesia.io?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'Luma AI', category: 'Text to video', logo: 'https://img.logo.dev/lumalabs.ai?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'Descript', category: 'Pro video editor', logo: 'https://cdn.simpleicons.org/descript' },

  { name: 'Durable AI', category: 'AI site builder', logo: 'https://img.logo.dev/durable.co?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'Framer AI', category: 'AI site design', logo: 'https://cdn.simpleicons.org/framer' },
  { name: '10Web AI Builder', category: 'AI site builder', logo: 'https://img.logo.dev/10web.io?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'Builder.io', category: 'AI site builder', logo: 'https://cdn.simpleicons.org/builderio' },

  { name: 'ElevenLabs', category: 'AI voice generator', logo: 'https://img.logo.dev/elevenlabs.io?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'Suno AI', category: 'AI music generator', logo: 'https://img.logo.dev/suno.com?token=pk_9tTeb9l3Re26R16m6yWe9A' },
  { name: 'PlayHT', category: 'AI voice generator', logo: 'https://img.logo.dev/play.ht?token=pk_9tTeb9l3Re26R16m6yWe9A' },
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
