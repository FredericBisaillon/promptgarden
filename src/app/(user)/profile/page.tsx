'use client'

import { useState } from "react"
import { Header } from "@/components/Header"
import { UserCard } from "@/components/UserCard"
import { TabSelector } from "@/components/TabSelector"
import { PromptGrid } from "@/components/PromptGrid"
import { mockUser } from "@/data/mock-users"

const tabs = [
  { id: 'prompts', label: 'My Prompts', count: mockUser.prompts.length },
  { id: 'favorites', label: 'Favorites', count: mockUser.favorites.length },
  { id: 'liked', label: 'Liked Prompts', count: mockUser.likedPrompts.length }
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('prompts')

  const getActivePrompts = () => {
    switch (activeTab) {
      case 'prompts':
        return mockUser.prompts
      case 'favorites':
        return mockUser.favorites
      case 'liked':
        return mockUser.likedPrompts
      default:
        return mockUser.prompts
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="w-full px-4 md:px-10 lg:px-40 py-5 flex justify-center items-start">
        <div className="flex-1 max-w-[960px] overflow-hidden flex flex-col items-start">
          <UserCard user={mockUser} />
          <TabSelector 
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <PromptGrid prompts={getActivePrompts()} />
        </div>
      </div>
    </main>
  )
} 