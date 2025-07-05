'use client'

import { useState, useEffect } from "react"

interface SearchBarProps {
  query: string
  onSearch: (query: string) => void
}

export function SearchBar({ query, onSearch }: SearchBarProps) {
  const [value, setValue] = useState(query)

  // Keep local state in sync when parent resets the query
  useEffect(() => {
    setValue(query)
  }, [query])

  // Debounce search calls
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value)
    }, 300)

    return () => clearTimeout(handler)
  }, [value, onSearch])

  return (
    <input
      type="text"
      placeholder="Rechercher un prompt..."
      className="w-full md:w-96 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
} 