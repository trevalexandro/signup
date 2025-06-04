'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../utils/supabase-client'

export default function SettingsPage() {
  const router = useRouter()
  const [tab, setTab] = useState<'account' | 'security' | 'preferences'>('account')

  const [user, setUser] = useState<any>(null)
  const [userEmail, setUserEmail] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [businessName, setBusinessName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [primaryPlatform, setPrimaryPlatform] = useState('')
  const [socialHandle, setSocialHandle] = useState('')
  const [industry, setIndustry] = useState('')
  const [brandBio, setBrandBio] = useState('')

  useEffect(() => {
    const loadUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth')
      } else {
        setUser(user)
        setUserEmail(user.email || '')
        setEmail(user.email || '')
      }
    }
    loadUser()
  }, [])

  useEffect(() => {
    if (!user) return
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('business_profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (data) {
        setBusinessName(data.business_name || '')
        setContactEmail(data.contact_email || '')
        setPhone(data.phone || '')
        setWebsite(data.website || '')
        setPrimaryPlatform(data.primary_platform || '')
        setSocialHandle(data.social_handle || '')
        setIndustry(data.industry || '')
        setBrandBio(data.brand_bio || '')
      }
    }
    fetchProfile()
  }, [user])

  const handleUpdateEmail = async () => {
    const { error } = await supabase.auth.updateUser({ email })
    if (error) alert('Email update failed: ' + error.message)
    else alert('Email updated successfully')
  }

  const handleUpdatePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) alert('Password update failed: ' + error.message)
    else alert('Password updated successfully')
  }

  const handleSaveBusinessProfile = async () => {
    if (!user) return
    const { error } = await supabase
      .from('business_profiles')
      .upsert([
        {
          id: user.id,
          business_name: businessName,
          contact_email: contactEmail,
          phone,
          website,
          primary_platform: primaryPlatform,
          social_handle: socialHandle,
          industry,
          brand_bio: brandBio,
        },
      ])

    if (error) alert('Error saving: ' + error.message)
    else alert('Business profile saved!')
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm h-16 flex items-center justify-between px-6 border-b border-gray-300">
        <div className="flex items-center space-x-3">
          <img src="/icon.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-[#b31b1b] tracking-wide">Poochies Business</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/dashboard" className="text-sm text-gray-700 hover:text-[#b31b1b] font-medium">← Back to Dashboard</a>
          <img src="https://api.dicebear.com/7.x/initials/svg?seed=User" alt="User Avatar" className="h-8 w-8 rounded-full border border-gray-300" />
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-[#e0e0e0] border-b border-gray-300 px-6">
        <div className="flex space-x-6 pt-4">
          {['account', 'security', 'preferences'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`text-sm pb-2 border-b-4 font-semibold tracking-wide uppercase ${tab === t ? 'border-[#b31b1b] text-[#b31b1b]' : 'border-transparent text-gray-600 hover:text-[#b31b1b]'}`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="flex justify-center p-8">
        <div className="w-full max-w-2xl bg-white rounded-xl border border-gray-300 shadow-md p-8">
          {tab === 'account' && (
            <>
              <h2 className="text-2xl font-bold text-[#333] mb-6 tracking-tight">Business Account Info</h2>
              <div className="grid grid-cols-1 gap-4">
                {[{ label: 'Business Name', value: businessName, setter: setBusinessName },
                  { label: 'Contact Email', value: contactEmail, setter: setContactEmail },
                  { label: 'Phone', value: phone, setter: setPhone },
                  { label: 'Website', value: website, setter: setWebsite },
                  { label: 'Social Handle / @username', value: socialHandle, setter: setSocialHandle },
                  { label: 'Industry', value: industry, setter: setIndustry }
                ].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b31b1b]"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Platform</label>
                  <select
                    value={primaryPlatform}
                    onChange={(e) => setPrimaryPlatform(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b31b1b]"
                  >
                    <option value="">Select a platform</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="TikTok">TikTok</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter">Twitter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brand Bio</label>
                  <textarea
                    value={brandBio}
                    onChange={(e) => setBrandBio(e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b31b1b]"
                  />
                </div>
              </div>
              <button
                onClick={handleSaveBusinessProfile}
                className="mt-6 w-full bg-[#b31b1b] hover:bg-[#991313] text-white font-semibold py-2 px-4 rounded-md transition duration-200"
              >
                Save Business Profile
              </button>
            </>
          )}

          {tab === 'security' && (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Security</h2>
              <p className="text-sm text-gray-700 mb-4">For your security, please log out when you're done. 2FA options will be added soon.</p>
              <button
                onClick={async () => {
                  await supabase.auth.signOut()
                  router.push('/auth')
                }}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Log Out
              </button>
            </>
          )}

          {tab === 'preferences' && (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Preferences</h2>
              <p className="text-sm text-gray-600">This section is coming soon — here you'll be able to update notification settings, theme options, and more.</p>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
