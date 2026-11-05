import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { Link } from 'react-router-dom'

const features = [
  { icon:'📸', title:'Escaneo por foto', desc:'Reconoce alimentos y estima calorías y macros en segundos.' },
  { icon:'🥗', title:'Planes de dieta', desc:'Más de 15 planes adaptados a tu objetivo y preferencias.' },
  { icon:'🍳', title:'Recetas balanceadas', desc:'Recetas rápidas validadas por dietistas.' },
  { icon:'📈', title:'Seguimiento', desc:'Gráficos de peso, calorías y macros diarios.' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Una forma revolucionaria de registrar tus comidas</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {features.map(f => <FeatureCard key={f.title} {...f} />)}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="font-bold">Únete a millones de historias de éxito</h3>
          <p className="text-sm text-gray-600 mt-2">4.6/5 en +58.000 valoraciones · 4.7/5 en +99.800 valoraciones</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="font-bold">Elige tu plan</h3>
          <p className="text-sm text-gray-600 mt-2">Keto, mediterráneo, vegetariano y más.</p>
          <Link to="/plans" className="text-brand-600 text-sm font-medium mt-3 inline-block">Ver planes →</Link>
        </div>
        <div className="bg-white rounded-2xl p-6 border">
          <h3 className="font-bold">Recetas del día</h3>
          <p className="text-sm text-gray-600 mt-2">En la mesa en poco tiempo.</p>
          <Link to="/recipes" className="text-brand-600 text-sm font-medium mt-3 inline-block">Ver recetas →</Link>
        </div>
      </section>
    </>
  )
}
