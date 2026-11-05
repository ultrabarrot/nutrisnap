import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Tu guía nutricional personal
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Alcanza un peso corporal saludable. Escanea tu comida con una foto, recibe planes de dieta adaptados y sigue tu progreso día a día.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/onboarding" className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700">
              Empezar ahora
            </Link>
            <Link to="/scan" className="border border-brand-600 text-brand-600 px-6 py-3 rounded-xl font-semibold hover:bg-brand-50">
              Escanear comida
            </Link>
          </div>
          <div className="mt-6 flex gap-6 text-sm text-gray-500">
            <span>⭐ 4.7/5 · +100k valoraciones</span>
            <span>🥗 +15 planes de dieta</span>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-6 border">
          <div className="aspect-[9/16] bg-gradient-to-b from-brand-100 to-brand-50 rounded-2xl flex items-center justify-center text-brand-700">
            <div className="text-center">
              <div className="text-6xl mb-2">📸</div>
              <p className="font-semibold">Foto de tu plato</p>
              <p className="text-sm text-gray-500">→ calorías y macros al instante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
