"use client"

import { useEffect, useState } from "react"

export function ProfileCarousel({ images, interval = 7000 }: { images: string[], interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Preload images and log any loading errors
  useEffect(() => {
    images.forEach(src => {
      const img = new Image()
      img.onload = () => console.log(`Loaded: ${src}`)
      img.onerror = () => console.error(`Failed to load: ${src}`)
      img.src = src
    })
  }, [images])

  // Handle image transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true)
      
      // Change image after fade out
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 300) // Half of transition duration
    }, interval - 300) // Start transition slightly before interval ends

    return () => clearTimeout(timer)
  }, [currentIndex, images.length, interval])

  // Log current image for debugging
  console.log('Current image:', images[currentIndex])

  return (
    <div className="relative w-full h-full">
      <img
        src={images[currentIndex]}
        alt={`Profile ${currentIndex + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        onError={(e) => {
          console.error('Error loading image:', (e.target as HTMLImageElement).src)
        }}
      />
      {/* Preload next image */}
      <img
        src={images[(currentIndex + 1) % images.length]}
        alt=""
        className="hidden"
        aria-hidden="true"
        onError={(e) => {
          console.error('Error preloading next image:', (e.target as HTMLImageElement).src)
        }}
      />
    </div>
  )
}