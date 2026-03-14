import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Founders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const founders = [
    {
      name: "Manish Keswani",
      role: "Co-Founder | Strategy & Partnerships",
      image: "https://www.aice.services/_next/image?url=%2Ffounders%2Fmanish.png&w=384&q=75",
      linkedin: "https://linkedin.com/in/manish-keswani",
      x: "https://x.com/ManishKeswani"
    },
    {
      name: "Hrushikesh Kuklare",
      role: "Co-Founder | AI & Research",
      image: "https://www.aice.services/_next/image?url=%2Ffounders%2Fhrushikesh.jpg&w=384&q=75",
      linkedin: "https://linkedin.com/in/hrushikesh-kuklare",
      x: "https://x.com/hrushikuklare"
    },
    {
      name: "Ajinkya Hazare",
      role: "Co-Founder | Innovation & Growth",
      image: "https://www.aice.services/_next/image?url=%2Ffounders%2Fajinkya.png&w=384&q=75",
      linkedin: "https://linkedin.com/in/ajinkya-hazare",
      x: "https://x.com/Ajinkya_Hazare"
    },
    {
      name: "Siddhesh Bandgar",
      role: "Co-Founder | Innovation & Growth",
      image: "/founders/siddhesh.jpg",
      linkedin: "https://www.linkedin.com/in/siddhesh-bandgar/",
      x: "https://x.com/SiddheshBandgar"
    }
  ];

  return (
    <div className="founders-page">
      <div className="founders-header">
        <motion.h1 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet the Founders
        </motion.h1>
        <motion.p 
          className="founders-subtitle text-center text-secondary mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The visionary team building the future of enterprise AI
        </motion.p>
      </div>

      <div className="founders-list container">
        {founders.map((founder, index) => (
          <motion.div 
            key={index} 
            className="founder-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="founder-avatar-container">
              <img src={founder.image} alt={founder.name} className="founder-avatar" />
            </div>
            <h3 className="founder-name">{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <div className="founder-socials">
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={founder.x} target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
