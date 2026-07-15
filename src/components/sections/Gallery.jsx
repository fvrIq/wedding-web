import { useState, useEffect } from 'react'
import { config } from '../../data/config'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal()
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedPhoto(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <section className="section-padding bg-cream-100">
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} text-center mb-12`}>
        <p className="ornament">Momen Kami</p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mt-2">
          Gallery
        </h2>
        <div className="gold-divider" />
      </div>

      <div className="max-w-5xl mx-auto px-4 columns-2 md:columns-3 gap-3 md:gap-4">
        {config.gallery.map((photo, index) => (
          <button
            key={index}
            onClick={() => setSelectedPhoto(photo)}
            className="block w-full mb-3 md:mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md focus:outline-none"
          >
            <img
              src={photo}
              alt={`Galeri ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6 cursor-zoom-out animate-fadein"
        >
          <img
            src={selectedPhoto}
            alt="Preview"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl animate-scalein"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}