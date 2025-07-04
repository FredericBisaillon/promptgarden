"use client"

import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImagePreview } from "@/components/ImagePreview"

interface ImageUploadProps {
  label?: string
  onChange?: (file: File | null) => void
  initialFile?: File | null
}

export function ImageUpload({ label = "Image", onChange, initialFile = null }: ImageUploadProps) {
  const [, setImage] = useState<File | null>(initialFile)
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    initialFile ? URL.createObjectURL(initialFile) : null
  )
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setImage(file)
    if (file) {
      setPreviewUrl(URL.createObjectURL(file))
    } else {
      setPreviewUrl(null)
    }
    onChange?.(file)
  }

  const handleRemoveImage = () => {
    setImage(null)
    setPreviewUrl(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
    onChange?.(null)
  }

  return (
    <div>
      <Label htmlFor="image-upload">{label}</Label>
      <Input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mt-2"
        ref={inputRef}
      />

      {previewUrl && (
        <ImagePreview previewUrl={previewUrl} onRemove={handleRemoveImage} />
      )}
    </div>
  )
} 