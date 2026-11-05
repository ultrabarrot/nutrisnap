import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Onboarding from './pages/Onboarding.jsx'
import Scan from './pages/Scan.jsx'
import DietPlans from './pages/DietPlans.jsx'
import Recipes from './pages/Recipes.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/plans" element={<DietPlans />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
