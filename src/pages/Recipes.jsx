import { recipes } from '../data/recipes.js'

export default function Recipes() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Recetas balanceadas</h1>
      <p className="text-gray-600 mb-6">Rápidas y fáciles, validadas por dietistas.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map(r => (
          <div key={r.id} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition">
            <div className="h-40 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-5xl">{r.emoji}</div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900">{r.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
              <div className="mt-3 flex gap-3 text-xs text-gray-500">
                <span>🔥 {r.calories} kcal</span>
                <span>⏱ {r.time} min</span>
                <span>🍽 {r.servings} porc.</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
