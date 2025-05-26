import { Navbar } from "@/components/Navbar"
import Home from "@/components/Home"
import About from "@/components/About"
import Studies from "@/components/Studies"
import Data from "@/components/Data"
import Experimental from "@/components/Experimental"
import Contact from "@/components/Contact"

export default function Page() {
  return (
    <main className="unified-layout">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="section-container bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <About />
      </section>

      {/* Studies Section */}
      <section id="studies" className="section-container bg-gradient-to-br from-purple-900 to-gray-900">
        <Studies />
      </section>

      {/* Analysis Tools Section (Data) */}
      <section id="data" className="section-container">
        <Data />
      </section>

      {/* Characterization Section */}
      <section id="characterization" className="section-container">
        <Experimental />
      </section>

      {/* Contact Section - NO section-container class to avoid min-height: 100vh */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 Sercan Ozen. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
