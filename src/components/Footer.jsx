export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">About</h4>
          <p className="leading-6">We craft quality products with a focus on design, durability, and customer delight. Shop with confidence and enjoy friendly support.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>Email: hello@yourbrand.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Market St, City, Country</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Follow us</h4>
          <div className="flex gap-3 text-gray-700">
            <a className="hover:text-blue-600" href="#">Twitter</a>
            <a className="hover:text-blue-600" href="#">Instagram</a>
            <a className="hover:text-blue-600" href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Your Brand. All rights reserved.</div>
    </footer>
  )
}
