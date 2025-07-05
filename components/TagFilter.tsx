'use client'

import { Badge } from "@/components/ui/badge"
import { useState, useRef, useEffect } from "react"

interface TagFilterProps {
  tags: string[]
  selectedTags: string[]
  onFilterChange: (tags: string[]) => void
}

export function TagFilter({ tags, selectedTags, onFilterChange }: TagFilterProps) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleTag = (tag: string) => {
    const newSelected = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]
    onFilterChange(newSelected)
  }

  // Close dropdown when click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative w-full lg:w-auto" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full lg:w-auto flex items-center justify-between gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm bg-white hover:bg-gray-50"
      >
        <span>Filtrer par tags</span>
        {selectedTags.length > 0 && (
          <span className="text-xs bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
            {selectedTags.length}
          </span>
        )}
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full lg:w-56 max-h-60 overflow-y-auto border border-gray-200 rounded-md bg-white shadow-lg p-2 space-y-1">
          {tags.map((tag) => {
            const isSelected = selectedTags.includes(tag)
            return (
              <label key={tag} className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleTag(tag)}
                  className="accent-primary"
                />
                <span className="text-sm">{tag}</span>
              </label>
            )
          })}
        </div>
      )}
    </div>
  )
} 