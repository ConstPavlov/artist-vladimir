import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Memory from './pages/Memory'
import Contacts from './pages/Contacts'
import './App.scss'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:section" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  )
}

export default App
