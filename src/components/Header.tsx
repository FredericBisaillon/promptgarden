'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { colors } from "@/constants/colors"

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-10 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <div
            className="w-4 h-4"
            style={{ backgroundColor: colors.textDark }}
          />
          <h1
            className="text-lg font-bold"
            style={{ color: colors.textDark }}
          >
            PromptGarden
          </h1>
        </div>
        <nav
          className="flex items-center gap-6 text-sm font-medium"
          style={{ color: colors.textDark }}
        >
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Explore</a>
          <a href="#" className="hover:underline">My Prompts</a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div
          className="flex items-center rounded-md px-3 py-1"
          style={{ backgroundColor: colors.gray100, color: colors.textSubtle }}
        >
          Search
        </div>
        <Button asChild style={{ backgroundColor: colors.primary }} className="text-white font-bold">
          <Link href="/prompt/create">New Prompt</Link>
        </Button>
        <img
          src="https://placehold.co/40x40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  )
} 