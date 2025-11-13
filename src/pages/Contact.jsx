import { useState } from 'react'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setForm({ name: '', email: '', phone: '', message: '' })
      setStatus('Thanks! We will get back to you soon.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="space-y-4">
          <input className="w-full border rounded-md p-3" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
          <input className="w-full border rounded-md p-3" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required />
          <input className="w-full border rounded-md p-3" placeholder="Phone (optional)" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} />
          <textarea className="w-full border rounded-md p-3 h-32" placeholder="Your message" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} required />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold">Send Message</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
        <div className="space-y-3 text-gray-700">
          <p><strong>Email:</strong> hello@yourbrand.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Market St, City</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" alt="Office" />
          </div>
        </div>
      </div>
    </div>
  )
}
