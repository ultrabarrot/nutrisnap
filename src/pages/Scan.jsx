import { useState } from 'react'
import { foodDB } from '../data/foods.js'

export default function Scan() {
  const [img, setImg] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFile = (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    const url = URL.createObjectURL(f)
    setImg(url)
    setResult(null)
  }

  const analyze = () => {
    setLoading(true)
    setTimeout(() => {
      // Mock: detecta 2 alimentos aleatorios
      const picked = [foodDB[0], foodDB[2]]
      const total = picked.reduce((a,x)=>a+x.calories,0)
      setResult({ items: picked, totalCalories: total, protein: picked.reduce((a,x)=>a+x.protein,0), carbs: picked.reduce((a,x)=>a+x.carbs,0), fat: picked.reduce((a,x)=>a+x.fat,0) })
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Escanea tu comida</h1>
      <p className="text-gray-600 mb-6">Sube una foto de tu plato y obtén calorías y macros al instante.</p>
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <input type="file" accept="image/*" onChange={handleFile} className="mb-4" />
        {img && <img src={img} alt="comida" className="w-full max-h-64 object-cover rounded-xl mb-4" />}
        <button onClick={analyze} disabled={!img||loading}
          className="bg-brand-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50 hover:bg-brand-700">
          {loading ? 'Analizando...' : 'Analizar foto'}
        </button>
        {result && (
          <div className="mt-6">
            <h3 className="font-bold text-lg">Resultado</h3>
            <p className="text-sm text-gray-500 mb-3">Alimentos detectados (demo)</p>
            <ul className="space-y-2">
              {result.items.map((it,i) => (
                <li key={i} className="flex justify-between border-b py-2">
                  <span>{it.name} ({it.portion})</span>
                  <span className="font-medium">{it.calories} kcal</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-4 gap-3 text-center">
              <div className="bg-brand-50 rounded-lg p-3"><p className="text-xs text-gray-500">Calorías</p><p className="font-bold text-brand-700">{result.totalCalories}</p></div>
              <div className="bg-gray-50 rounded-lg p-3"><p className="text-xs text-gray-500">Proteína</p><p className="font-bold">{result.protein}g</p></div>
              <div className="bg-gray-50 rounded-lg p-3"><p className="text-xs text-gray-500">Carbos</p><p className="font-bold">{result.carbs}g</p></div>
              <div className="bg-gray-50 rounded-lg p-3"><p className="text-xs text-gray-500">Grasas</p><p className="font-bold">{result.fat}g</p></div>
            </div>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-4">Nota: el reconocimiento por foto es simulado. En producción, integrar una API de visión (Google Vision, AWS Rekognition) + base nutricional (USDA).</p>
    </div>
  )
}
