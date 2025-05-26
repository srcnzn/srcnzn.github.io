"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Studies() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [thumbnailOffset, setThumbnailOffset] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const thumbnailContainerRef = useRef(null)

  // Studies data with correct thumbnail paths
  const studies = [
    {
      id: "space-stability",
      title: "Space Environment Stability",
      subtitle: "Investigating perovskite solar cell degradation under simulated space conditions",
      description:
        "This study examines the long-term stability of perovskite solar cells when exposed to vacuum, temperature cycling, and radiation typical of low Earth orbit environments.",
      backgroundImage: "/images/studies/backgrounds/space-stability.jpg",
      thumbnail: "/images/studies/thumbnails/space-stability.jpg",
    },
    {
      id: "radiation-hardness",
      title: "Radiation Hardness",
      subtitle: "Analyzing the impact of proton and electron radiation on perovskite performance",
      description:
        "This research investigates how different types and doses of radiation affect the electronic properties and performance of various perovskite compositions.",
      backgroundImage: "/images/studies/backgrounds/radiation-hardness.jpg",
      thumbnail: "/images/studies/thumbnails/radiation-hardness.jpg",
    },
    {
      id: "tandem-architecture",
      title: "Tandem Architecture",
      subtitle: "Developing multi-junction perovskite solar cells for enhanced efficiency",
      description:
        "This project focuses on the design and optimization of tandem perovskite solar cells that can achieve higher efficiencies by harvesting a broader spectrum of solar radiation.",
      backgroundImage: "/images/studies/backgrounds/tandem-architecture.jpg",
      thumbnail: "/images/studies/thumbnails/tandem-architecture.jpg",
    },
    {
      id: "triple-junction",
      title: "Triple Junction Devices",
      subtitle: "Pushing the efficiency limits with three-layer perovskite cells",
      description:
        "This study explores the fabrication and characterization of triple-junction perovskite solar cells, aiming to break efficiency records while maintaining stability.",
      backgroundImage: "/images/studies/backgrounds/triple-junction.jpg",
      thumbnail: "/images/studies/thumbnails/triple-junction.jpg",
    },
    {
      id: "lilt-performance",
      title: "LILT Performance",
      subtitle: "Low-Intensity, Low-Temperature performance optimization",
      description:
        "This research examines perovskite solar cell performance under the low-intensity, low-temperature conditions found in deep space missions.",
      backgroundImage: "/images/studies/backgrounds/lilt-performance.jpg",
      thumbnail: "/images/studies/thumbnails/lilt-performance.jpg",
    },
  ]

  // Update container width on resize
  useEffect(() => {
    const updateContainerWidth = () => {
      if (thumbnailContainerRef.current) {
        setContainerWidth(thumbnailContainerRef.current.offsetWidth)
      }
    }

    // Initial measurement
    updateContainerWidth()

    // Add resize listener
    window.addEventListener("resize", updateContainerWidth)
    return () => window.removeEventListener("resize", updateContainerWidth)
  }, [])

  // Auto-center the active thumbnail when it changes or container size changes
  useEffect(() => {
    if (thumbnailContainerRef.current && containerWidth > 0) {
      const thumbnailWidth = 144 // 128px + 16px margin (w-32 + space-x-4)
      const totalThumbnailsWidth = studies.length * thumbnailWidth

      // If all thumbnails fit, center them
      if (totalThumbnailsWidth <= containerWidth) {
        // Center all thumbnails
        const centerOffset = (containerWidth - totalThumbnailsWidth) / 2
        setThumbnailOffset(centerOffset)
      } else {
        // Calculate offset to center the active thumbnail
        const activePosition = activeSlide * thumbnailWidth
        const centerOffset = containerWidth / 2 - thumbnailWidth / 2
        let newOffset = centerOffset - activePosition

        // Constrain the offset to prevent showing empty space
        const maxOffset = 0
        const minOffset = containerWidth - totalThumbnailsWidth
        newOffset = Math.max(minOffset, Math.min(maxOffset, newOffset))

        setThumbnailOffset(newOffset)
      }
    }
  }, [activeSlide, studies.length, containerWidth])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === studies.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? studies.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  const scrollThumbnails = (direction) => {
    if (thumbnailContainerRef.current && containerWidth > 0) {
      const thumbnailWidth = 144 // 128px + 16px margin
      const totalThumbnailsWidth = studies.length * thumbnailWidth

      // Only scroll if thumbnails don't all fit
      if (totalThumbnailsWidth > containerWidth) {
        const scrollAmount = thumbnailWidth * 1 // Scroll by 1 thumbnail
        const maxOffset = 0
        const minOffset = containerWidth - totalThumbnailsWidth

        let newOffset = thumbnailOffset + (direction === "left" ? scrollAmount : -scrollAmount)
        newOffset = Math.max(minOffset, Math.min(maxOffset, newOffset))

        setThumbnailOffset(newOffset)
      }
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      {studies.map((study, index) => (
        <div
          key={study.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${study.backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full px-6 pt-24">
          <div className="text-sm uppercase tracking-widest mb-2 opacity-80">STUDIES</div>

          {/* Animated content */}
          <div className="h-[300px] relative">
            {studies.map((study, index) => (
              <div
                key={study.id}
                className={`absolute transition-all duration-700 ${
                  index === activeSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 max-w-3xl">{study.title}</h1>
                <h2 className="text-xl sm:text-2xl mb-6 max-w-2xl">{study.subtitle}</h2>
                <p className="text-lg opacity-90 max-w-2xl">{study.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnails and Navigation */}
        <div className="max-w-7xl mx-auto w-full px-6 pb-16">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                prevSlide()
                scrollThumbnails("left")
              }}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Previous study"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Center thumbnails section - scrollable */}
            <div className="flex-1 overflow-hidden px-4" ref={thumbnailContainerRef}>
              <div
                className="flex space-x-4 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(${thumbnailOffset}px)`,
                  width: `${studies.length * 144}px`, // 128px + 16px margin per thumbnail
                }}
              >
                {studies.map((study, index) => (
                  <div
                    key={study.id}
                    className={`w-32 h-24 flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition-all duration-300 transform ${
                      activeSlide === index
                        ? "border-2 border-white scale-110 shadow-lg shadow-white/20"
                        : "border border-white/30 opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <img
                      src={study.thumbnail || "/placeholder.svg"}
                      alt={`${study.title} thumbnail`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.src = `/placeholder.svg?height=200&width=300&query=${study.title}`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                nextSlide()
                scrollThumbnails("right")
              }}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Next study"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-4">
            {studies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeSlide ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
