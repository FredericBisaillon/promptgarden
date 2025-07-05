'use client'

// New Explore page implementing search & tag filter functionality
import { useMemo, useState } from "react"
import { mockPrompts } from "@/data/mock-prompts"
import { PromptCard } from "@/components/PromptCard"
import { Header } from "@/components/Header"
import { SearchBar } from "@/components/SearchBar"
import { TagFilter } from "@/components/TagFilter"
import { ModelFilter } from "@/components/ModelFilter"
import { AI_MODELS } from "@/constants/aiModels"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ExplorePage() {
  const [query, setQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedModels, setSelectedModels] = useState<string[]>([])

  // Build list of unique tags from prompts (avoids external dependency)
  const TAG_LIST = Array.from(new Set(mockPrompts.flatMap((p) => p.tags)))

  const filteredPrompts = useMemo(() => {
    return mockPrompts.filter((prompt) => {
      const matchesQuery =
        prompt.title.toLowerCase().includes(query.toLowerCase()) ||
        prompt.description.toLowerCase().includes(query.toLowerCase())

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => prompt.tags.includes(tag))

      const matchesModels =
        selectedModels.length === 0 || selectedModels.includes(prompt.model)

      return matchesQuery && matchesTags && matchesModels
    })
  }, [query, selectedTags, selectedModels])

  const resetFilters = () => {
    setQuery("")
    setSelectedTags([])
    setSelectedModels([])
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-6">
        <h1 className="text-3xl font-bold">Explore Prompts</h1>

        {/* Search & Filters */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <SearchBar query={query} onSearch={setQuery} />

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center w-full">
            <TagFilter
              tags={TAG_LIST}
              selectedTags={selectedTags}
              onFilterChange={setSelectedTags}
            />
            <ModelFilter
              models={AI_MODELS}
              selectedModels={selectedModels}
              onFilterChange={setSelectedModels}
            />
          </div>
        </div>

        {/* Selected filters badges & reset button */}
        {(selectedTags.length > 0 || selectedModels.length > 0 || query) && (
          <div className="flex flex-wrap gap-2 items-center">
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                variant="default"
                className="cursor-pointer"
                onClick={() => setSelectedTags(selectedTags.filter((t) => t !== tag))}
              >
                {tag}
              </Badge>
            ))}
            {selectedModels.map((model) => (
              <Badge
                key={model}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => setSelectedModels(selectedModels.filter((m) => m !== model))}
              >
                {model}
              </Badge>
            ))}
            <Button variant="ghost" onClick={resetFilters} className="w-fit">
              Reset filters
            </Button>
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-gray-600">
          {filteredPrompts.length} résultat{filteredPrompts.length !== 1 && "s"}
        </p>

        {/* Prompt list */}
        {filteredPrompts.length === 0 ? (
          <p className="text-gray-600 pt-8">Aucun prompt trouvé.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        )}
      </div>
    </>
  )
} 