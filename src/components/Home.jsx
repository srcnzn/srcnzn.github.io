"use client"

import { useState } from "react"
import About from "./About"

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-7xl text-center text-white">
        <div className={`transition-transform duration-700 ease-in-out ${aboutOpen ? "-translate-y-3" : ""}`}>
          <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            Sercan Ozen
          </h1>
          <p className={`text-xl text-gray-300 transition-[margin] duration-700 md:text-2xl ${aboutOpen ? "mb-5" : "mb-8"}`}>Doctoral Researcher in Physics</p>
        </div>

        <div className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-700 ease-in-out ${aboutOpen ? "mb-8 grid-rows-[1fr] opacity-100" : "pointer-events-none mb-0 grid-rows-[0fr] opacity-0"}`} aria-hidden={!aboutOpen}>
          <div className="min-h-0 overflow-hidden rounded-3xl shadow-2xl shadow-black/25">
            <About />
          </div>
        </div>

        <div className={`transition-transform duration-700 ease-in-out ${aboutOpen ? "translate-y-1" : ""}`}>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-400">
          Exploring single- and multi-junction perovskite solar cells for space: from radiation hardness and LILT to
          performance benchmarking and mechanical tests.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.getElementById("studies").scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View My Research
          </button>
          <button
            onClick={() => document.getElementById("data").scrollIntoView({ behavior: "smooth" })}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Explore My Tools
          </button>
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
          <button
            type="button"
            onClick={() => setAboutOpen((open) => !open)}
            aria-expanded={aboutOpen}
            className="rounded-lg border border-blue-300/70 bg-blue-300/10 px-6 py-3 font-medium text-blue-100 transition-all duration-300 hover:scale-105 hover:bg-blue-300/20"
          >
            {aboutOpen ? "Close About Me" : "About Me"}
          </button>
        </div>
        </div>

        <button
          type="button"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce rounded-full p-3 text-gray-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Scroll to About Me"
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
            className="text-current"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
