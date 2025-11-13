import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Phone, Wrench, Home, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
    }`

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-gray-900">
            <ShoppingBag className="h-6 w-6 text-blue-600" />
            <span>Your Brand</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              <Home className="h-4 w-4 mr-1" /> Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              <ShoppingBag className="h-4 w-4 mr-1" /> Products
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              <Wrench className="h-4 w-4 mr-1" /> Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <Phone className="h-4 w-4 mr-1" /> Contact
            </NavLink>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <nav className="grid gap-1">
              <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/products" onClick={() => setOpen(false)} className={navLinkClass}>
                Products
              </NavLink>
              <NavLink to="/services" onClick={() => setOpen(false)} className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
