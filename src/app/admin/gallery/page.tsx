'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

const categories = [
  'Bridal Couture',
  'Native Wear',
  'Corporate',
  'Bespoke',
  'Event Wear',
]

interface GalleryImage {
  id: string
  title: string
  category: string
  image_url: string
  featured: boolean
  created_at: string
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    title: '',
    category: 'Bridal Couture',
    featured: false,
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    loadImages()
  }, [])

  async function loadImages() {
    const supabase = createClient()
    const { data } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })
    setImages(data || [])
    setLoading(false)
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setSelectedFile(file)
    setPreview(URL.createObjectURL(file))
  }

  async function handleUpload() {
    if (!selectedFile) return
    setUploading(true)
    setError('')
    setSuccess('')

    try {
      const supabase = createClient()

      // 1. Upload file to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(fileName, selectedFile, {
          cacheControl: '3600',
          upsert: false,
        })

      if (uploadError) throw uploadError

      // 2. Get the public URL
      const { data: urlData } = supabase.storage
        .from('gallery')
        .getPublicUrl(fileName)

      const publicUrl = urlData.publicUrl

      // 3. Save to gallery table
      const { error: dbError } = await supabase
        .from('gallery')
        .insert({
          title: form.title || selectedFile.name,
          category: form.category,
          image_url: publicUrl,
          featured: form.featured,
        })

      if (dbError) throw dbError

      setSuccess('Image uploaded successfully!')
      setSelectedFile(null)
      setPreview(null)
      setForm({ title: '', category: 'Bridal Couture', featured: false })
      loadImages()

    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Upload failed'
      setError(message)
    } finally {
      setUploading(false)
    }
  }

  async function handleDelete(id: string, imageUrl: string) {
    if (!confirm('Delete this image?')) return

    const supabase = createClient()

    // Extract filename from URL
    const fileName = imageUrl.split('/').pop()

    // Delete from storage
    if (fileName) {
      await supabase.storage.from('gallery').remove([fileName])
    }

    // Delete from database
    await supabase.from('gallery').delete().eq('id', id)
    loadImages()
  }

  async function toggleFeatured(id: string, current: boolean) {
    const supabase = createClient()
    await supabase
      .from('gallery')
      .update({ featured: !current })
      .eq('id', id)
    loadImages()
  }

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    border: '1px solid rgba(17,17,17,0.1)',
    backgroundColor: '#FAF8F3',
    fontFamily: 'Jost, sans-serif',
    fontSize: '0.875rem',
    color: '#111111',
    outline: 'none',
  }

  return (
    <div>
      <h2 className="text-heading mb-10" style={{ color: '#0B0B0B' }}>
        Gallery Manager
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

        {/* Upload form */}
        <div>
          <h3
            className="font-serif font-light text-2xl mb-6"
            style={{ color: '#0B0B0B' }}
          >
            Upload New Image
          </h3>

          {/* File picker */}
          <div
            onClick={() => document.getElementById('file-input')?.click()}
            style={{
              border: '1px dashed rgba(198,168,90,0.4)',
              backgroundColor: preview ? 'transparent' : 'rgba(198,168,90,0.03)',
              cursor: 'pointer',
              marginBottom: '1.5rem',
              overflow: 'hidden',
              minHeight: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem' }}>
                <p className="text-label" style={{ color: 'rgba(17,17,17,0.3)' }}>
                  Click to select image
                </p>
                <p className="text-body mt-2" style={{ color: 'rgba(17,17,17,0.2)' }}>
                  JPG, PNG, WEBP supported
                </p>
              </div>
            )}
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-4">
            <div>
              <label
                className="text-label block mb-2"
                style={{ color: 'rgba(17,17,17,0.5)' }}
              >
                Image Title (optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Ivory Bridal Gown"
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                style={inputStyle}
              />
            </div>

            <div>
              <label
                className="text-label block mb-2"
                style={{ color: 'rgba(17,17,17,0.5)' }}
              >
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                style={inputStyle}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <label
              className="flex items-center gap-3 cursor-pointer"
              style={{ userSelect: 'none' }}
            >
              <div
                onClick={() => setForm((p) => ({ ...p, featured: !p.featured }))}
                style={{
                  width: '20px',
                  height: '20px',
                  border: `1px solid ${form.featured ? '#C6A85A' : 'rgba(17,17,17,0.2)'}`,
                  backgroundColor: form.featured ? '#C6A85A' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {form.featured && (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#FAF8F3">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-body" style={{ color: 'rgba(17,17,17,0.6)' }}>
                Featured image (shows on homepage)
              </span>
            </label>

            {error && (
              <p className="text-body" style={{ color: '#E53E3E' }}>{error}</p>
            )}
            {success && (
              <p className="text-body" style={{ color: '#2F855A' }}>{success}</p>
            )}

            <button
              onClick={handleUpload}
              disabled={uploading || !selectedFile}
              className="btn-primary"
              style={{
                opacity: uploading || !selectedFile ? 0.5 : 1,
                cursor: uploading || !selectedFile ? 'not-allowed' : 'pointer',
              }}
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
          </div>
        </div>

        {/* Quick tips */}
        <div
          style={{
            padding: '2rem',
            border: '1px solid rgba(198,168,90,0.2)',
            backgroundColor: 'rgba(198,168,90,0.03)',
            alignSelf: 'start',
          }}
        >
          <p className="text-label mb-4" style={{ color: '#C6A85A' }}>
            Upload Tips
          </p>
          {[
            'Use high quality images — at least 1000px wide',
            'Portrait orientation works best for the gallery grid',
            'JPG files are smaller and load faster than PNG',
            'Mark your best work as Featured to show on homepage',
            'Use clear category names for easy filtering',
            'Recommended size: 800KB or less per image',
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <div
                className="gold-line mt-2"
                style={{ width: '16px', flexShrink: 0 }}
              />
              <p className="text-body" style={{ color: 'rgba(17,17,17,0.6)' }}>
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Existing images */}
      <div>
        <h3
          className="font-serif font-light text-2xl mb-6"
          style={{ color: '#0B0B0B' }}
        >
          Uploaded Images ({images.length})
        </h3>

        {loading ? (
          <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
            Loading...
          </p>
        ) : images.length === 0 ? (
          <div
            style={{
              padding: '3rem',
              textAlign: 'center',
              border: '1px solid rgba(198,168,90,0.15)',
            }}
          >
            <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
              No images uploaded yet
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                style={{
                  border: '1px solid rgba(198,168,90,0.15)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={image.image_url}
                  alt={image.title || image.category}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                <div style={{ padding: '0.75rem' }}>
                  <p
                    className="text-body font-medium"
                    style={{
                      color: '#0B0B0B',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {image.title || 'Untitled'}
                  </p>
                  <p
                    className="text-label mt-1"
                    style={{ color: 'rgba(17,17,17,0.4)' }}
                  >
                    {image.category}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <button
                      onClick={() => toggleFeatured(image.id, image.featured)}
                      className="text-label"
                      style={{
                        color: image.featured ? '#C6A85A' : 'rgba(17,17,17,0.3)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      {image.featured ? '★ Featured' : '☆ Feature'}
                    </button>
                    <button
                      onClick={() => handleDelete(image.id, image.image_url)}
                      className="text-label"
                      style={{
                        color: 'rgba(229,62,62,0.6)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}