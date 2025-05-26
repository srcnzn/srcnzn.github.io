"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

export default function Design() {
  // State for the currently featured design
  const [featuredDesign, setFeaturedDesign] = useState(0)
  // State for the active filter category
  const [activeFilter, setActiveFilter] = useState("all")
  // State for the modal
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  // Sample design data - you would replace this with your actual designs
  const designs = [
    {
      id: "perovskite-structure",
      title: "Perovskite Crystal Structure",
      category: "scientific-figure",
      description:
        "3D visualization of the crystal structure of a cesium lead halide perovskite, showing octahedral arrangement.",
      image: "/images/designs/perovskite-structure.jpg",
      software: "Blender + VESTA",
      year: "2023",
    },
    {
      id: "tandem-cell",
      title: "Tandem Solar Cell Architecture",
      category: "scientific-figure",
      description: "Cross-sectional view of a 2-terminal perovskite/silicon tandem solar cell with labeled layers.",
      image: "/images/designs/tandem-cell.jpg",
      software: "Blender",
      year: "2022",
    },
    {
      id: "space-solar",
      title: "Space Solar Array Concept",
      category: "concept",
      description: "Conceptual design of a deployable perovskite solar array for small satellite applications.",
      image: "/images/designs/space-solar.jpg",
      software: "Blender + Photoshop",
      year: "2023",
    },
    {
      id: "journal-cover",
      title: "Advanced Materials Journal Cover",
      category: "publication",
      description: "Cover art designed for a special issue on perovskite photovoltaics in space applications.",
      image: "/images/designs/journal-cover.jpg",
      software: "Blender + Illustrator",
      year: "2022",
    },
    {
      id: "degradation-mechanism",
      title: "Radiation Degradation Mechanism",
      category: "scientific-figure",
      description: "Visualization of the atomic-level degradation mechanism in perovskites under proton irradiation.",
      image: "/images/designs/degradation.jpg",
      software: "Blender + VESTA",
      year: "2023",
    },
    {
      id: "conference-poster",
      title: "EUPVSEC Conference Poster",
      category: "publication",
      description: "Design for a scientific poster presented at the European Photovoltaic Solar Energy Conference.",
      image: "/images/designs/poster.jpg",
      software: "Illustrator + Blender elements",
      year: "2022",
    },
    {
      id: "device-encapsulation",
      title: "Solar Cell Encapsulation Design",
      category: "concept",
      description: "Exploded view of an advanced encapsulation system for perovskite solar cells in space.",
      image: "/images/designs/encapsulation.jpg",
      software: "Blender",
      year: "2023",
    },
    {
      id: "measurement-setup",
      title: "LILT Measurement Setup",
      category: "scientific-figure",
      description: "3D visualization of the low-intensity, low-temperature measurement setup used in our laboratory.",
      image: "/images/designs/lilt-setup.jpg",
      software: "Blender",
      year: "2022",
    },
  ]

  // Filter categories
  const categories = [
    { id: "all", label: "All Designs" },
    { id: "scientific-figure", label: "Scientific Figures" },
    { id: "publication", label: "Publication Designs" },
    { id: "concept", label: "Concept Visualizations" },
  ]

  // Filter designs based on active category
  const filteredDesigns =
    activeFilter === "all" ? designs : designs.filter((design) => design.category === activeFilter)

  // Handle opening the modal
  const openModal = (design) => {
    setModalImage(design)
    setModalOpen(true)
  }

  // Navigate featured designs
  const nextFeatured = () => {
    setFeaturedDesign((prev) => (prev === designs.length - 1 ? 0 : prev + 1))
  }

  const prevFeatured = () => {
    setFeaturedDesign((prev) => (prev === 0 ? designs.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Featured Design Showcase */}
      <div className="relative h-[70vh] mb-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${designs[featuredDesign].image})`,
            opacity: 0.6,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-widest mb-2 opacity-80">DESIGN</div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">{designs[featuredDesign].title}</h1>
              <p className="text-xl opacity-90 mb-6">{designs[featuredDesign].description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 px-4 py-2 rounded-full text-sm">{designs[featuredDesign].software}</div>
                <div className="bg-white/10 px-4 py-2 rounded-full text-sm">{designs[featuredDesign].year}</div>
              </div>
              <button
                onClick={() => openModal(designs[featuredDesign])}
                className="bg-white/20 hover:bg-white/30 transition-colors px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <ZoomIn size={18} />
                View Full Design
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevFeatured}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Previous design"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextFeatured}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Next design"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Filter Categories */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeFilter === category.id ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Design Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-gray-900 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openModal(design)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={design.image || "/placeholder.svg"}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{design.title}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {design.software} • {design.year}
                </p>
                <p className="text-sm text-gray-300 line-clamp-2">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && modalImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="max-w-5xl max-h-[90vh] overflow-auto bg-gray-900 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={modalImage.image || "/placeholder.svg"} alt={modalImage.title} className="w-full h-auto" />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{modalImage.title}</h2>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="bg-white/10 px-3 py-1 rounded-full text-sm">{modalImage.software}</div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-sm">{modalImage.year}</div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-sm capitalize">
                  {modalImage.category.replace("-", " ")}
                </div>
              </div>
              <p className="text-gray-300">{modalImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
