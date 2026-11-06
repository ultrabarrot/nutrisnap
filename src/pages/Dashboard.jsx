import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useNavigate } from 'react-router-dom'

function loadProfile() {
  try { return JSON.parse(localStorage.getItem('nutrisnap_profile')) } catch { return null }
}
function loadHistory() {
  try { return JSON.parse(localStorage.getItem('nutrisnap_weight_history')) || [] } catch { return [] }
}

const mealPlans = {
  lose: {
    balanced: [
      { meal: 'Desayuno', items: 'Avena con frutos rojos + yogur griego', kcal: 320 },
      { meal: 'Comida', items: 'Pechuga de pollo + arroz integral + ensalada', kcal: 520 },
      { meal: 'Cena', items: 'Tortilla de espinacas + verduras al vapor', kcal: 380 },
      { meal: 'Snack', items: 'Manzana + un puñado de almendras', kcal: 180 },
    ],
    keto: [
      { meal: 'Desayuno', items: 'Huevos revueltos con aguacate', kcal: 350 },
      { meal: 'Comida', items: 'Salmón al horno + brócoli con mantequilla', kcal: 560 },
      { meal: 'Cena', items: 'Ensalada César con pollo (sin crutones)', kcal: 420 },
      { meal: 'Snack', items: 'Queso + nueces', kcal: 200 },
    ],
  },
  maintain: {
    balanced: [
      { meal: 'Desayuno', items: 'Tostadas integrales + huevo + fruta', kcal: 380 },
      { meal: 'Comida', items: 'Pasta integral con pollo y verduras', kcal: 600 },
      { meal: 'Cena', items: 'Sopa de verduras + pescado a la plancha', kcal: 450 },
      { meal: 'Snack', items: 'Yogur + granola', kcal: 220 },
    ],
  },
  gain: {
    balanced: [
      { meal: 'Desayuno', items: 'Batido de avena, plátano y proteína', kcal: 450 },
      { meal: 'Comida', items: 'Arroz + ternera + legumbres', kcal: 720 },
      { meal: 'Cena', items: 'Pasta + pollo + queso', kcal: 600 },
      { meal: 'Snack', items: 'Batido de leche + cacahuete', kcal: 300 },
    ],
  },
}

export default function Dashboard() {
  const nav = useNavigate()
  const [profile, setProfile] = useState(loadProfile())
  const [history, setHistory] = useState(loadHistory())
  const [newWeight, setNewWeight] = useState('')

  useEffect(() => {
    if (!profile) nav('/onboarding')
  }, [profile, nav])

  if (!profile) return null

  const planKey = profile.goal || 'lose'
  const dietKey = profile.diet || 'balanced'
  const plan = (mealPlans[planKey] && mealPlans[planKey][dietKey]) || (mealPlans[planKey] && mealPlans[planKey].balanced) || mealPlans.lose.balanced
  const totalKcal = plan.reduce((a, m) => a + m.kcal, 0)

  const addWeight = () => {
    const w = Number(newWeight)
    if (!w) return
    const updated = [...history, { day: `D${history.length + 1}`, weight: w }]
    setHistory(updated)
    localStorage.setItem('nutrisnap_weight_history', JSON.stringify(updated))
    const p = { ...profile, weight: w }
    setProfile(p)
    localStorage.setItem('nutrisnap_profile', JSON.stringify(p))
    setNewWeight('')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Hola, {profile.name} 👋</h1>
      <p className="text-gray-600 mb-6">Tu progreso hacia {profile.targetWeight} kg.</p>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Peso actual</p><p className="text-2xl font-bold text-brand-700">{profile.weight} kg</p></div>
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Objetivo</p><p className="text-2xl font-bold">{profile.targetWeight} kg</p></div>
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Calorías sugeridas</p><p className="text-2xl font-bold">{totalKcal}</p></div>
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Dieta</p><p className="text-2xl font-bold capitalize">{profile.diet}</p></div>
      </div>

      <div className="bg-white rounded-2xl p-6 border shadow-sm mb-6">
        <h3 className="font-bold mb-4">Evolución del peso (kg)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history.length ? history : [{ day: 'Hoy', weight: profile.weight }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={['dataMin-1', 'dataMax+1']} />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#059669" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-2 mt-4">
          <input type="number" placeholder="Nuevo peso (kg)" value={newWeight} onChange={e => setNewWeight(e.target.value)}
            className="border rounded-lg px-3 py-2 flex-1" />
          <button onClick={addWeight} className="bg-brand-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-700">Registrar</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h3 className="font-bold mb-4">Rutina de comida sugerida ({profile.diet})</h3>
        <ul className="divide-y">
          {plan.map((m, i) => (
            <li key={i} className="py-3 flex justify-between gap-4">
              <div>
                <p className="font-medium text-gray-900">{m.meal}</p>
                <p className="text-sm text-gray-600">{m.items}</p>
              </div>
              <span className="text-sm font-medium text-brand-600 whitespace-nowrap">{m.kcal} kcal</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-400 mt-4">Total diario sugerido: {totalKcal} kcal. Ajusta según tu actividad.</p>
      </div>
    </div>
  )
}
