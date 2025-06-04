'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function Dashboard() {
  const [posts, setPosts] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      if (!response.ok) {
        toast.error('Failed to fetch posts. Please try again later.');
      }

      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm h-16 flex items-center justify-between px-6 border-b border-gray-300">
        <div className="flex items-center space-x-3">
          <img src="/icon.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-[#b31b1b] tracking-wide">AI Automind System (AMS)</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/settings" className="text-sm text-gray-700 hover:text-[#b31b1b] font-medium">Settings</a>
          <button
            onClick={async () => {
              const { error } = await supabase.auth.signOut()
              if (!error) router.replace('/auth')
            }}
            className="text-sm text-red-500 hover:text-red-700 font-medium"
          >
            Logout
          </button>
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=User"
            alt="User Avatar"
            className="h-8 w-8 rounded-full border border-gray-300"
          />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen pt-6 px-4 space-y-4 shadow-sm">
          <nav className="space-y-2">
            <a href="/dashboard" className="block px-3 py-2 text-sm rounded text-gray-800 hover:bg-blue-50 hover:text-[#b31b1b] font-medium">Home</a>
            <a href="#" className="block px-3 py-2 text-sm rounded text-gray-800 hover:bg-blue-50 hover:text-[#b31b1b] font-medium">Scheduled Posts</a>
            <a href="/settings" className="block px-3 py-2 text-sm rounded text-gray-800 hover:bg-blue-50 hover:text-[#b31b1b] font-medium">Settings</a>
          </nav>
        </aside>

        {/* Main Feed */}
        <main className="flex-1 p-8 space-y-8">
          {/* Welcome Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-[#b31b1b] mb-4">Welcome to AMS: AI Automind System</h1>
            <p className="text-gray-700 mb-4">
              Your central hub for AI-powered social media automation, brand insights, and content management. Stay ahead with AMS.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden">
                <video autoPlay muted loop className="w-full rounded-xl border border-gray-300">
                  <source src="/avatar-pitch.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Social Reach</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>📱 Instagram • 12K followers</li>
                  <li>🎥 TikTok • 24K views/month</li>
                  <li>👥 LinkedIn • 3K professionals reached</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Featured Insight</h3>
                <p className="text-sm text-gray-600">
                  “Posting between 10AM–12PM increases engagement by 35% for fashion brands.”
                </p>
              </div>
            </div>
          </section>

          {/* Example Blogs */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Marketing Tips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <article className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                <h3 className="text-lg font-bold text-[#b31b1b]">How AI Boosts Brand Presence</h3>
                <p className="text-sm text-gray-600 mt-2">Explore how machine learning can automate your marketing pipeline and free up time.</p>
                <a href="#" className="text-xs text-blue-600 mt-3 inline-block">Read more →</a>
              </article>
              <article className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                <h3 className="text-lg font-bold text-[#b31b1b]">Top 5 Trends in 2025</h3>
                <p className="text-sm text-gray-600 mt-2">Stay competitive by embracing influencer microtargeting and predictive content AI.</p>
                <a href="#" className="text-xs text-blue-600 mt-3 inline-block">Explore trends →</a>
              </article>
            </div>
          </section>

          {/* Upcoming Posts */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Posts</h2>
            {posts.length === 0 ? (
              <div className="text-gray-500">No posts found. Try adding one in Supabase.</div>
            ) : (
              <div className="space-y-4">
                {posts.map(post => (
                  <div
                    key={post.id}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#b31b1b] font-medium">{post.platform}</span>
                      <span className="text-xs text-gray-500">{post.scheduled_date}</span>
                    </div>
                    <p className="mt-2 text-gray-800">{post.content}</p>
                    <span className="inline-block mt-3 text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                      {post.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
