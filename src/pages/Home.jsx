import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, BadgeCheck, Truck } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Elevate your everyday with products that delight
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover quality, design-forward items curated to make life simpler and more beautiful.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md transition-colors">
                Shop Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-5 py-3 rounded-md transition-colors">
                Our Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2"><Truck className="h-5 w-5 text-blue-600" /> Fast shipping</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-blue-600" /> Secure checkout</div>
              <div className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-blue-600" /> Quality assured</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 opacity-10 absolute inset-0 blur-3xl" />
            <img className="relative rounded-xl shadow-xl w-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" alt="Hero" />
          </div>
        </div>
      </section>
    </div>
  )
}
