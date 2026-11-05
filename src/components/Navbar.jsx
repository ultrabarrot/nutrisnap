import { Link, useLocation } from 'react-router-dom'
import { Camera, Apple, Utensils, BarChart3, User } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/scan', label: 'Escanear' },
  { to: '/plans', label: 'Planes' },
  { to: '/recipes', label: 'Recetas' },
  { to: '/dashboard', label: 'Progreso' },
]

export default function Navbar() {
  const loc = useLocation()
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-brand-700 text-xl">
          <Apple className="w-6 h-6" /> NutriSnap
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`text-sm font-medium ${loc.pathname===l.to?'text-brand-600':'text-gray-600 hover:text-brand-600'}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/onboarding" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700">
          Empezar
        </Link>
      </div>
    </header>
  )
}
