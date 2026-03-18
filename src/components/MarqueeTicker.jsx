import { Bot, Brain, TrendingUp, Zap, Target, Rocket, Sparkles, BarChart3 } from 'lucide-react'

const tickerItems = [
  { icon: <Brain size={18} />, label: 'AI Strategy', color: '#E8553A' },
  { icon: <TrendingUp size={18} />, label: 'Business Growth', color: '#F0A060' },
  { icon: <Bot size={18} />, label: 'AI Agents', color: '#D94F6E' },
  { icon: <Zap size={18} />, label: 'Automation', color: '#E8553A' },
  { icon: <Target size={18} />, label: 'Leadership', color: '#F0A060' },
  { icon: <Rocket size={18} />, label: 'Innovation', color: '#D94F6E' },
  { icon: <Sparkles size={18} />, label: 'Generative AI', color: '#E8553A' },
  { icon: <BarChart3 size={18} />, label: 'Analytics', color: '#F0A060' },
]

export default function MarqueeTicker() {
  // Duplicate items for seamless loop
  const items = [...tickerItems, ...tickerItems, ...tickerItems]

  return (
    <div className="marquee-ticker-section">
      {/* Row 1 — scrolls left */}
      <div className="marquee-ticker-row">
        <div className="marquee-ticker-track">
          {items.map((item, i) => (
            <div key={`r1-${i}`} className="marquee-ticker-item" style={{ background: item.color }}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-ticker-row reverse">
        <div className="marquee-ticker-track reverse">
          {items.map((item, i) => (
            <div key={`r2-${i}`} className="marquee-ticker-item" style={{ background: item.color }}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
