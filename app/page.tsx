'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Tag } from '@/components/Tag'
import { PromptGrid } from '@/components/PromptGrid'
import { mockUser } from '@/data/mock-users'
import { isAuthenticated, logout } from '@/lib/auth/auth'

export default function Home() {
  const router = useRouter()

  // Redirect if the user is not authenticated (dev-only mock auth)
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login')
    }
  }, [router])

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  // Mock data for trending tags – will be fetched from the API later
  const trendingTags: string[] = [
    'Midjourney',
    'ChatGPT',
    'StableDiffusion',
    'Marketing',
    'UX',
    'Art'
  ]

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Site header */}
      <Header />

      {/* Hero section */}
      <section className="w-full flex flex-col items-center text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Bienvenue sur <span className="text-primary">PromptGarden</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Explore, crée et partage les meilleurs prompts IA
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Button size="lg" onClick={() => router.push('/explore')}>Explorer les prompts</Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => router.push('/prompt/create')}
          >
            Créer un prompt
          </Button>
        </div>
      </section>

      {/* User favourites */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Tes prompts favoris</h2>
        {mockUser.favorites.length ? (
          <PromptGrid prompts={mockUser.favorites} />
        ) : (
          <p className="text-gray-500">Aucun favori pour l’instant.</p>
        )}
      </section>

      {/* Recent prompts */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Tes derniers prompts créés</h2>
        {mockUser.prompts.length ? (
          <PromptGrid prompts={mockUser.prompts.slice(0, 6)} />
        ) : (
          <p className="text-gray-500">Tu n’as pas encore créé de prompt.</p>
        )}
      </section>

      {/* Trending tags */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Tags en tendance</h2>
        <div className="flex flex-wrap gap-3">
          {trendingTags.map((tag) => (
            <Tag key={tag} label={`#${tag}`} />
          ))}
        </div>
      </section>

      {/* Spacer to push logout to bottom */}
      <div className="flex-grow" />

      {/* Logout */}
      <div className="py-8 w-full flex justify-center">
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="px-6"
        >
          Se déconnecter
        </Button>
      </div>
    </main>
  )
}
