# AICE Education Landing Page

A modern, premium landing page for **AICE (AI Centre of Excellence)** — an education platform offering cutting-edge AI & technology courses.

Built with React + Vite, featuring a sleek dark-themed design with smooth motion, storytelling sections, and a responsive layout.

## ✨ Features

- 🎨 **Premium Dark UI** — Glassmorphism, gradients, and modern typography
- 🚀 **Smooth Animations** — Framer Motion reveal/stagger effects and animated hero text
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 📄 **Multi-Page** — Home, Courses, Newsletter, Contact, Founders spotlight, and an Admin Dashboard
- 🧑‍💻 **AI Innovators & Tools** — Highlight cards for innovators, AI tools, and program benefits
- 🔒 **Secure Admin Area** — Firebase Authentication for managing leads and newsletter signups
- ⚡ **Fast** — Built on Vite for lightning-fast dev and build times

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 5 | Build tool & dev server |
| React Router 7 | Client-side routing |
| Firebase | Authentication & Firestore Database |
| Framer Motion | Animations |
| Vanilla CSS | Styling |

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar
│   ├── Footer.jsx           # Footer section
│   ├── ScrollReveal.jsx     # Scroll animation wrapper
│   ├── ScrollBackground.jsx # Ambient gradient scroll background
│   ├── AnimatedText.jsx     # Typewriter-style hero text
│   ├── AITools.jsx          # AI tools grid section
│   └── Innovators.jsx       # Innovators highlight cards
├── pages/
│   ├── Home.jsx             # Landing page hero & highlights
│   ├── Courses.jsx          # Course listings & benefits
│   ├── Newsletter.jsx       # Newsletter signup CTA
│   ├── Contact.jsx          # Contact support page
│   ├── Founders.jsx         # Founders spotlight section
│   └── Admin.jsx            # Secure Admin Dashboard for leads
├── lib/
│   ├── firebase.js          # Firebase configuration & initialization
│   └── forms.js             # Form submission and Firestore queries
├── App.jsx               # App routes & layout
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/applicatonsaiacademy/aice-education-landing.git

# Navigate to the project
cd aice-education-landing

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview

# default dev server
# http://localhost:5173
```

## 👤 Author

**Palani Prashanth (PP)**

---

> Built with ❤️ for AICE — AI Centre of Excellence
