"use client"
import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/Navbar"

export default function UnifiedLayout({ children }) {
  const [activeSection, setActiveSection] = useState("home")
  const sectionRefs = useRef([])
  const containerRef = useRef(null)
  
  // Function to add section refs
  const addToRefs = (el, index) => {
    if (el) {
      sectionRefs.current[index] = el
    }
  }
  
  // Set up Intersection Observer to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const id = entry.target.id
            setActiveSection(id)
          }
        })
      },
      { 
        threshold: [0.2, 0.5, 0.8],
        rootMargin: "0px" 
      }
    )
    
    // Observe all section elements
    sectionRefs.current.filter(Boolean).forEach((section) => {
      observer.observe(section)
    })
    
    return () => {
      sectionRefs.current.filter(Boolean).forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [children])
  
  // Function to scroll to a section
  const scrollToSection = (id) => {
    const index = ["home", "about", "studies", "experimental", "data", "design"].indexOf(id)
    if (index !== -1 && sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      })
    }
  }
  
  return (
    <div className="w-screen min-h-screen" ref={containerRef}>
    <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="scroll-smooth pt-20"> {/* Add pt-16 for navbar height */}        
        {children.map((child, index) => {
          // Get section ID from component name or fallback to index
          const componentName = child.type?.name?.toLowerCase() || `section-${index}`
          const sectionId = ["Home", "About", "Studies", "Experimental", "Data", "Design"]
            .includes(child.type?.name) 
            ? child.type.name.toLowerCase() 
            : `section-${index}`
          
          return (
            <section
              key={index}
              ref={(el) => addToRefs(el, index)}
              id={sectionId}
              className="min-h-screen w-full snap-start"
            >
              {child}
            </section>
          )
        })}
      </main>
    </div>
  )
}