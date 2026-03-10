'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    setLoading(false)
    if (res.ok) {
      router.replace('/admin')
    } else {
      const data = await res.json().catch(() => ({ error: 'Login failed' }))
      setError(data.error || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100
 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white border border-blue-200 rounded-xl p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Admin Login</h1>
        <p className="text-gray-600 text-sm mb-4">Enter the admin password to continue.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          className="w-full mb-3 px-3 py-2 bg-zinc-800 border border-blue-300 rounded-lg text-gray-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-blue-600 text-sm mb-3">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-600 text-gray-800 font-semibold px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
