import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { weightHistory, todayMacros } from '../data/progress.js'

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Tu progreso</h1>
      <p className="text-gray-600 mb-6">Seguimiento de peso y calorías.</p>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Peso actual</p><p className="text-2xl font-bold text-brand-700">72.4 kg</p></div>
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Objetivo</p><p className="text-2xl font-bold">68.0 kg</p></div>
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Calorías hoy</p><p className="text-2xl font-bold">{todayMacros.calories}</p></div>
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Racha</p><p className="text-2xl font-bold">12 días</p></div>
      </div>

      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h3 className="font-bold mb-4">Evolución del peso (kg)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weightHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={['dataMin-1','dataMax+1']} />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#059669" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border shadow-sm mt-6">
        <h3 className="font-bold mb-4">Macros de hoy</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div><p className="text-xs text-gray-500">Proteína</p><p className="text-xl font-bold">{todayMacros.protein}g</p></div>
          <div><p className="text-xs text-gray-500">Carbos</p><p className="text-xl font-bold">{todayMacros.carbs}g</p></div>
          <div><p className="text-xs text-gray-500">Grasas</p><p className="text-xl font-bold">{todayMacros.fat}g</p></div>
        </div>
      </div>
    </div>
  )
}
