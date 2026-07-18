import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portfolio />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
