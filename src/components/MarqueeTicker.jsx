import { Bot, Brain, TrendingUp, Zap, Target, Rocket, Sparkles, BarChart3 } from 'lucide-react'

const tickerItems = [
  { icon: <Brain size={16} />, label: 'AI Strategy' },
  { icon: <TrendingUp size={16} />, label: 'Business Growth' },
  { icon: <Bot size={16} />, label: 'AI Agents' },
  { icon: <Zap size={16} />, label: 'Automation' },
  { icon: <Target size={16} />, label: 'Leadership' },
  { icon: <Rocket size={16} />, label: 'Innovation' },
  { icon: <Sparkles size={16} />, label: 'Generative AI' },
  { icon: <BarChart3 size={16} />, label: 'Analytics' },
]

export default function MarqueeTicker() {
  const items = [...tickerItems, ...tickerItems, ...tickerItems]

  return (
    <div className="marquee-ticker-section">
      <div className="marquee-ticker-row">
        <div className="marquee-ticker-track">
          {items.map((item, i) => (
            <div key={`r1-${i}`} className="marquee-ticker-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-ticker-row reverse">
        <div className="marquee-ticker-track reverse">
          {items.map((item, i) => (
            <div key={`r2-${i}`} className="marquee-ticker-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
