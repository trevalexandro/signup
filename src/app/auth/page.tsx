'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabase-client'
import { useRouter } from 'next/navigation'

const suitImages = [
  '/Suitblack.png',
  '/Suitblue.png',
  '/Suitgreen.png',
  '/Suitred.png',
  '/Suitwhite.png'
]

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [index, setIndex] = useState(0)
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    let response
    if (isLogin) {
      response = await supabase.auth.signInWithPassword({ email, password })
    } else {
      response = await supabase.auth.signUp({ email, password })
    }

    const { error } = response
    if (error) {
      alert('Error: ' + error.message)
    } else {
      router.push('/dashboard')
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % suitImages.length)
    }, 700)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col lg:flex-row items-center justify-center px-6">
      {/* Left section: animated suit slideshow */}
      <div className="hidden lg:flex flex-col items-center justify-center mr-12">
        <img
          src={suitImages[index]}
          alt="Changing Suit"
          className="w-72 h-72 rounded-xl shadow-lg border border-gray-300 object-contain transition duration-300 ease-in-out"
        />
        <p className="mt-4 text-gray-500 text-sm max-w-xs text-center">
          Watch AMS avatars adapt in real-time — powered by AI.
        </p>
      </div>

      {/* Right section: login form */}
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        {/* Logo and Title */}
        <div className="flex items-center mb-6 space-x-3">
          <img src="/icon.png" alt="AMS Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-[#b31b1b]">
            {isLogin ? 'Login to AMS' : 'Create Your AMS Account'}
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#b31b1b] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#b31b1b] hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle */}
        <p className="mt-4 text-sm text-gray-600 text-center">
          {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}
