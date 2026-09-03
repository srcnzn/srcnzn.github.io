"use client"

import { useEffect, useState } from "react"
import { FileText } from "lucide-react"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "studies", label: "Research" },
  { id: "characterization", label: "Expertise" },
  { id: "data", label: "Software" },
  { id: "publications", label: "Publications" },
]

function LinkedInIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function OrcidIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.444 3.588-3.722 0-2.016-1.091-3.722-3.588-3.722h-2.297z" />
    </svg>
  )
}

function ScholarIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5s-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
    </svg>
  )
}

const profileLinks = [
  { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/srcnzn", icon: LinkedInIcon },
  { label: "ORCID Profile", href: "https://orcid.org/0000-0001-9955-4158", icon: OrcidIcon },
  {
    label: "Google Scholar Profile",
    href: "https://scholar.google.com/citations?hl=tr&user=tHx4vz0AAAAJ&view_op=list_works",
    icon: ScholarIcon,
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-container")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId)
        }
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" })
    }
  }

  const navButtonClass = (id, mobile = false) =>
    `${mobile ? "block w-full text-left text-base" : "text-sm"} rounded-md px-3 py-2 font-medium transition-colors ${
      activeSection === id ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {profileLinks.map((profile) => {
              const Icon = profile.icon
              return (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                  aria-label={profile.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <div className="flex items-baseline gap-1 xl:gap-3">
              {navItems.map((item) => (
                <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className={navButtonClass(item.id)}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <a
              href="/cv"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 font-medium text-white shadow-lg ring-2 ring-orange-400/20 transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-red-600 hover:shadow-xl hover:ring-orange-400/40"
            >
              <FileText size={18} />
              My CV
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 lg:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle main menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-700 lg:hidden">
          <div className="space-y-1 px-3 pb-4 pt-3 sm:px-6">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className={navButtonClass(item.id, true)}>
                {item.label}
              </button>
            ))}

            <div className="mt-3 border-t border-gray-700 pt-3">
              <a
                href="/cv"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 font-medium text-white shadow-lg"
              >
                <FileText size={18} />
                My CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
