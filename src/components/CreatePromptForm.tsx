'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState, useRef, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { AI_MODELS } from "@/constants/aiModels"
import { colors } from "@/constants/colors"

// Reusable components
import { Tag } from "@/components/Tag"
import { TagInput } from "@/components/TagInput"
import { ImageUpload } from "@/components/ImageUpload"

const suggestedTags = ["Creative Writing", "Marketing", "Social Media"]

export function CreatePromptForm() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [imageFile, setImageFile] = useState<File | null>(null)
  const modelDropdownRef = useRef<HTMLDivElement>(null)

  const [modelQuery, setModelQuery] = useState("")
  const [selectedModel, setSelectedModel] = useState<string | null>(null)
  const [showModelDropdown, setShowModelDropdown] = useState(false)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        modelDropdownRef.current &&
        !modelDropdownRef.current.contains(e.target as Node)
      ) {
        setShowModelDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleAddTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag))
  }

  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <h2
        className="text-3xl font-bold mb-8"
        style={{ color: colors.textDark }}
      >
        Create a New Prompt
      </h2>

      <div className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter prompt title" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="content">Prompt Content</Label>
          <Textarea id="content" placeholder="Write your full prompt here..." className="mt-2 min-h-[144px]" />
        </div>

        <div>
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea id="description" placeholder="Short description of the prompt..." className="mt-2 min-h-[144px]" />
        </div>

        <div ref={modelDropdownRef} className="relative">
          <Label htmlFor="model">AI Model</Label>
          <Input
            id="model"
            placeholder="Type to search AI model"
            className="mt-2"
            value={selectedModel ?? modelQuery}
            onChange={(e) => {
              setSelectedModel(null)
              setModelQuery(e.target.value)
              setShowModelDropdown(true)
            }}
            onFocus={() => setShowModelDropdown(true)}
          />

          {showModelDropdown && (
            <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border bg-white py-1 shadow-lg">
              {AI_MODELS.filter((model) =>
                model.toLowerCase().includes(modelQuery.toLowerCase())
              ).map((model) => (
                <li
                  key={model}
                  onClick={() => {
                    setSelectedModel(model)
                    setModelQuery("")
                    setShowModelDropdown(false)
                  }}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                >
                  {model}
                </li>
              ))}
              {AI_MODELS.filter((m) =>
                m.toLowerCase().includes(modelQuery.toLowerCase())
              ).length === 0 && (
                <li className="px-3 py-2 text-sm text-gray-500">No matches</li>
              )}
            </ul>
          )}
        </div>

        <div>
          <Label htmlFor="useCase">Use Case</Label>
          <Input id="useCase" placeholder="e.g. Creative Writing, Marketing, etc." className="mt-2" />
        </div>

        <div>
          <Label>Suggested Tags</Label>
          <div className="flex gap-2 flex-wrap mt-2">
            {suggestedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleAddTag(tag)}
                style={{ backgroundColor: colors.gray100, color: colors.textDark }}
                className="text-sm font-medium px-4 py-1 rounded-md hover:brightness-95"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label>Selected Tags</Label>
          {selectedTags.length === 0 && (
            <p
              className="text-sm text-gray-500 mt-2"
              role="status"
              aria-live="polite"
            >
              No tag selected.
            </p>
          )}
          <div className="flex gap-2 flex-wrap mt-2">
            <AnimatePresence>
              {selectedTags.map((tag) => (
                <Tag key={tag} label={tag} onRemove={() => handleRemoveTag(tag)} />
              ))}
            </AnimatePresence>
          </div>
        </div>

        <TagInput onAdd={handleAddTag} className="mt-4" />

        <ImageUpload
          label="Prompt Image (Optional)"
          onChange={setImageFile}
          initialFile={imageFile}
        />

        <div className="pt-6">
          <Button
            style={{ backgroundColor: colors.primary }}
            className="text-white font-bold"
          >
            Publish Prompt
          </Button>
        </div>
      </div>
    </div>
  )
}