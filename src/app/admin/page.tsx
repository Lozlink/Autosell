'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image_url: '',
    category: '',
    read_time: '',
    published: true,
  })
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as never
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    const res = await fetch('/api/admin/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setLoading(false)

    if (res.ok) {
      setStatus('Post created successfully.')
      setForm({ title: '', slug: '', excerpt: '', content: '', image_url: '', category: '', read_time: '', published: true })
    } else {
      const data = await res.json().catch(() => ({ error: 'Failed to create post' }))
      setStatus(data.error || 'Failed to create post')
    }
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.replace('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black px-4 py-8">
      <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Blog Admin</h1>
          <button onClick={logout} className="text-sm text-red-300 hover:text-red-200">Logout</button>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Title</label>
            <input name="title" value={form.title} onChange={onChange} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white" required />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Slug</label>
            <input name="slug" value={form.slug} onChange={onChange} placeholder="my-awesome-post" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white" required />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Excerpt</label>
            <input name="excerpt" value={form.excerpt} onChange={onChange} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white" />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Image URL</label>
            <input name="image_url" value={form.image_url} onChange={onChange} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Category</label>
              <input name="category" value={form.category} onChange={onChange} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white" />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Read time (e.g. 5 min read)</label>
              <input name="read_time" value={form.read_time} onChange={onChange} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Content</label>
            <textarea name="content" value={form.content} onChange={onChange} rows={10} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white" required />
          </div>
          <label className="flex items-center gap-2 text-zinc-300">
            <input type="checkbox" name="published" checked={form.published} onChange={onChange} />
            Published
          </label>
          <div className="flex items-center gap-4">
            <button disabled={loading} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg disabled:opacity-50">{loading ? 'Saving...' : 'Save Post'}</button>
            {status && <p className="text-sm text-zinc-300">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}
