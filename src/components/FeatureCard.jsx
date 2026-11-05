export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}
