"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, FormEvent } from "react"
import { cn } from "@/lib/utils"
import { colors } from "@/constants/colors"

interface TagInputProps {
  onAdd: (tag: string) => void
  placeholder?: string
  buttonLabel?: string
  className?: string
}

export function TagInput({
  onAdd,
  placeholder = "Add custom tag",
  buttonLabel = "Add",
  className,
}: TagInputProps) {
  const [value, setValue] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (trimmed) {
      onAdd(trimmed)
      setValue("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex items-center gap-2", className)}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full"
      />
      <Button
        type="submit"
        style={{ backgroundColor: colors.primary }}
        className="text-white font-bold"
      >
        {buttonLabel}
      </Button>
    </form>
  )
} 