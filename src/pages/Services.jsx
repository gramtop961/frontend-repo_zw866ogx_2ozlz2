import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Services</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : services.length === 0 ? (
        <div className="bg-blue-50 text-blue-700 p-4 rounded">
          No services yet. Add service entries to your database to see them here.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.id} className="border rounded-xl p-5 hover:shadow transition">
              <div className="text-2xl">{s.icon || '🔧'}</div>
              <h3 className="mt-2 font-semibold text-gray-900">{s.name}</h3>
              <p className="text-gray-600 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
