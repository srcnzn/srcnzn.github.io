"use client"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Sercan Ozen
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">Doctoral Researcher in Physics</p>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-400">
          Investigating perovskite solar cells for extreme environments and space applications, focusing on performance
          stability and degradation mechanisms.
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
        </div>

        {/* Optional animated arrow indicating scroll down */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
            className="text-gray-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
