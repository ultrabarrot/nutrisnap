import { plans } from '../data/plans.js'

export default function DietPlans() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Planes de dieta</h1>
      <p className="text-gray-600 mb-6">Elige el programa que se adapte a ti. Más de 15 planes nutricionales.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.id} className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">{p.emoji}</div>
            <h3 className="font-bold text-lg text-gray-900">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-brand-600">{p.calories} kcal/día</span>
              <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-brand-700">Elegir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
