import { useEffect, useState } from 'react'

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Products</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : items.length === 0 ? (
        <div className="bg-blue-50 text-blue-700 p-4 rounded">
          No products yet. Seed your database with items to see them here.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <div key={p.id} className="border rounded-xl p-4 hover:shadow transition">
              <img src={p.image || 'https://via.placeholder.com/600x400?text=Product'} alt={p.title} className="rounded-md w-full h-48 object-cover" />
              <div className="mt-3">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{p.description}</p>
                <div className="mt-3 font-bold text-blue-700">${p.price?.toFixed ? p.price.toFixed(2) : p.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
