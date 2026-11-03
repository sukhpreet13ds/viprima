import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import IndustryServe from './pages/IndustryServe'
import Carrer from './pages/Carrer'
import Training from './pages/Training'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<IndustryServe />} />
            <Route path="/training" element={<Training />} />
            <Route path="/career" element={<Carrer />} />
            <Route path="/careers" element={<Carrer />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* Floating WhatsApp and Call Action Buttons */}
        <FloatingActions />
      </div>
    </Router>
  )
}

export default App
