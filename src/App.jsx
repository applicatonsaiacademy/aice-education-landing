import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Newsletter from './pages/Newsletter'
import Contact from './pages/Contact'
import Founders from './pages/Founders'
import Admin from './pages/Admin'

function App() {
  const location = useLocation()

  return (
    <>
      <div className="app-content">
        {location.pathname !== '/admin' && <Navbar />}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </AnimatePresence>
        {location.pathname !== '/admin' && <Footer />}
      </div>
    </>
  )
}

export default App
