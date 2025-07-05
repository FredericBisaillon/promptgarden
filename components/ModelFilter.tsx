'use client'

import { Badge } from "@/components/ui/badge"
import { useState, useRef, useEffect } from "react"

interface ModelFilterProps {
  models: string[]
  selectedModels: string[]
  onFilterChange: (models: string[]) => void
}

export function ModelFilter({ models, selectedModels, onFilterChange }: ModelFilterProps) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleModel = (model: string) => {
    const newSelected = selectedModels.includes(model)
      ? selectedModels.filter((m) => m !== model)
      : [...selectedModels, model]
    onFilterChange(newSelected)
  }

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
        <span>Filtrer par modèles</span>
        {selectedModels.length > 0 && (
          <span className="text-xs bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
            {selectedModels.length}
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
          {models.map((model) => {
            const isSelected = selectedModels.includes(model)
            return (
              <label key={model} className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleModel(model)}
                  className="accent-primary"
                />
                <span className="text-sm">{model}</span>
              </label>
            )
          })}
        </div>
      )}
    </div>
  )
} 