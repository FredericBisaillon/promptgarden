'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { colors } from "@/constants/colors"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-10 py-3">
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
          className="hidden md:flex items-center gap-6 text-sm font-medium"
          style={{ color: colors.textDark }}
        >
          <a href="#" className="hover:underline">Home</a>
          <Link href="/explore" className="hover:underline">Explore</Link>
          <Link href="/profile" className="hover:underline">My Prompts</Link>
        </nav>
        <div className="hidden md:flex items-center gap-6">
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
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: colors.textDark }}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <nav className="space-y-3">
              <a 
                href="#" 
                className="block text-sm font-medium hover:underline"
                style={{ color: colors.textDark }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <Link 
                href="/explore" 
                className="block text-sm font-medium hover:underline"
                style={{ color: colors.textDark }}
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                href="/profile" 
                className="block text-sm font-medium hover:underline"
                style={{ color: colors.textDark }}
                onClick={() => setIsMenuOpen(false)}
              >
                My Prompts
              </Link>
            </nav>
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div
                className="flex items-center rounded-md px-3 py-2 w-full"
                style={{ backgroundColor: colors.gray100, color: colors.textSubtle }}
              >
                Search
              </div>
              <Button 
                asChild 
                style={{ backgroundColor: colors.primary }} 
                className="text-white font-bold w-full"
              >
                <Link href="/prompt/create" onClick={() => setIsMenuOpen(false)}>
                  New Prompt
                </Link>
              </Button>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm font-medium" style={{ color: colors.textDark }}>
                  Profile
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 