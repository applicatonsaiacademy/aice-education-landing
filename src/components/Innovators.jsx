import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const innovatorsData = [
  { name: "Andrew Ng", role: "Founder, DeepLearning.AI", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/4a51775cfddbad28203221f9827ca7d519110181.jpg" },
  { name: "Fei-Fei Li", role: "Co-Director, Stanford HAI", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7aafbda45d1ff8a65a720e6ca81cfc6d78b45c12.jpg" },
  { name: "Yann LeCun", role: "Chief AI Scientist, Meta", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Laura_Chaubard_%26_Yann_Le_Cun_-_2024_%2853814052697%29_%28cropped%29.jpg" },
  { name: "Geoffrey Hinton", role: "Cognitive Psychologist", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Geoffrey_E._Hinton%2C_2024_Nobel_Prize_Laureate_in_Physics_%28cropped1%29.jpg/960px-Geoffrey_E._Hinton%2C_2024_Nobel_Prize_Laureate_in_Physics_%28cropped1%29.jpg" },
  { name: "Yoshua Bengio", role: "Professor, U.de Montréal", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e0dbc87b88d367440b50720131668dc6e64c768d.jpg" },
  { name: "Andrej Karpathy", role: "Former Dir. of AI, Tesla", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/4e6d04a888b8eba7e82b6aaf17087ef7f79e9da7.jpg" },
  { name: "Sam Altman", role: "CEO, OpenAI", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped_3%29.jpg" },
  { name: "Demis Hassabis", role: "CEO, Google DeepMind", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/9126b67424f388b45bbe6859b84f667af9505f19.jpg" },
  { name: "Dario Amodei", role: "CEO, Anthropic", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/00846833350a67b65e8846304a28983f8d2e78bb.jpg" },
  { name: "Ilya Sutskever", role: "Co-Founder, OpenAI", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b4e039cf20a646f3a49ea8433084c3838c323f59.jpg" },
  { name: "Jensen Huang", role: "CEO, NVIDIA", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/eda01022f2b5ff3b9ee18f894c5e41491acee295.jpg" },
  { name: "Mustafa Suleyman", role: "CEO, Microsoft AI", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Mustafa_Suleyman_photo_%28cropped%29.jpg/960px-Mustafa_Suleyman_photo_%28cropped%29.jpg" },
  { name: "Jeff Dean", role: "Chief Scientist, Google", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jeff_Dean_in_2025_x.jpg/960px-Jeff_Dean_in_2025_x.jpg" },
  { name: "Ian Goodfellow", role: "Creator of GANs", image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Ian_Goodfellow.jpg" },
  { name: "Sebastian Thrun", role: "Founder, Udacity", image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e7d9706d5e57c2d0a5c76ad727d2fbbba8246574.jpg" }
]

export default function Innovators() {
  // Duplicate the array to create a seamless infinite marquee effect
  const marqueeItems = [...innovatorsData, ...innovatorsData];

  return (
    <section className="innovators-section">
      <div className="container">
        <ScrollReveal>
          <div className="innovators-header">
            <span className="section-label">EXPERT-LED LEARNING</span>
            <h2 className="section-title">
              Learning Inspired by AI Innovators
            </h2>
            <p className="innovators-quote">
              "Learn the tools and strategies used by the teams building AI at OpenAI, DeepMind, and NVIDIA."
            </p>
            <p className="section-subtitle mx-auto text-center">
              Our curriculum is inspired by insights, research, and talks from leading AI pioneers including Andrew Ng, Fei-Fei Li, Yann LeCun, Geoffrey Hinton, and other global AI leaders.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="innovators-marquee-container">
        <div className="innovators-marquee">
          {marqueeItems.map((person, index) => (
            <div key={index} className="innovator-card">
              <img 
                src={person.image} 
                alt={person.name} 
                className="innovator-image"
                loading="lazy"
              />
              <div className="innovator-info">
                <span className="innovator-name">{person.name}</span>
                <span className="innovator-role">{person.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
