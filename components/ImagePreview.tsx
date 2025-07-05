"use client"

import { Button } from "@/components/ui/button"

interface ImagePreviewProps {
  /**
   * URL de l’image à prévisualiser. Doit être une URL locale (ex: URL.createObjectURL) ou distante.
   */
  previewUrl: string
  /**
   * Callback déclenché lorsqu’on clique sur le bouton « Remove ».
   */
  onRemove: () => void
  /**
   * Texte du label affiché au-dessus de l’aperçu. Par défaut « Image Preview: »
   */
  label?: string
}

export function ImagePreview({ previewUrl, onRemove, label = "Image Preview:" }: ImagePreviewProps) {
  return (
    <div className="mt-4 space-y-2">
      <p className="text-sm text-gray-600">{label}</p>
      {/* Aperçu */}
      <img src={previewUrl} alt="Preview" className="rounded-md max-h-64 object-contain border" />

      {/* Bouton de suppression */}
      <Button
        variant="outline"
        type="button"
        onClick={onRemove}
        className="text-red-500 border-red-300 hover:bg-red-50"
      >
        Remove Image
      </Button>
    </div>
  )
} 