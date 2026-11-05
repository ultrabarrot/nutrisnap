import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const steps = ['Perfil', 'Objetivo', 'Preferencias']

export default function Onboarding() {
  const nav = useNavigate()
  const [step, setStep] = useState(0)
  const [data, setData] = useState({ name:'', age:'', height:'', weight:'', goal:'lose', diet:'balanced' })

  const next = () => step < steps.length-1 ? setStep(s=>s+1) : nav('/dashboard')
  const back = () => step > 0 && setStep(s=>s-1)

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Crea tu programa personalizado</h1>
      <p className="text-gray-600 mb-6">Paso {step+1} de {steps.length}: {steps[step]}</p>
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        {step===0 && (
          <div className="space-y-4">
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Nombre" value={data.name} onChange={e=>setData({...data,name:e.target.value})} />
            <input className="w-full border rounded-lg px-3 py-2" type="number" placeholder="Edad" value={data.age} onChange={e=>setData({...data,age:e.target.value})} />
            <input className="w-full border rounded-lg px-3 py-2" type="number" placeholder="Altura (cm)" value={data.height} onChange={e=>setData({...data,height:e.target.value})} />
            <input className="w-full border rounded-lg px-3 py-2" type="number" placeholder="Peso actual (kg)" value={data.weight} onChange={e=>setData({...data,weight:e.target.value})} />
          </div>
        )}
        {step===1 && (
          <div className="space-y-3">
            <p className="font-medium">¿Cuál es tu objetivo?</p>
            {['lose','maintain','gain'].map(g => (
              <label key={g} className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer">
                <input type="radio" name="goal" checked={data.goal===g} onChange={()=>setData({...data,goal:g})} />
                <span>{g==='lose'?'Perder peso':g==='maintain'?'Mantener peso':'Ganar masa'}</span>
              </label>
            ))}
          </div>
        )}
        {step===2 && (
          <div className="space-y-3">
            <p className="font-medium">Preferencia de dieta</p>
            {['balanced','keto','mediterranean','vegetarian'].map(d => (
              <label key={d} className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer">
                <input type="radio" name="diet" checked={data.diet===d} onChange={()=>setData({...data,diet:d})} />
                <span className="capitalize">{d}</span>
              </label>
            ))}
          </div>
        )}
        <div className="flex justify-between mt-6">
          <button onClick={back} disabled={step===0} className="px-4 py-2 text-gray-500 disabled:opacity-30">Atrás</button>
          <button onClick={next} className="bg-brand-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-700">
            {step===steps.length-1?'Finalizar':'Siguiente'}
          </button>
        </div>
      </div>
    </div>
  )
}
