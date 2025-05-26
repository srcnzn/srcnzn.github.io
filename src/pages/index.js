import { Navbar } from "../src/components/Navbar"
import Home from "../src/components/Home"
import About from "../src/components/About"
import Studies from "../src/components/Studies"
import Data from "../src/components/Data"
import Experimental from "../src/components/Experimental"
import Contact from "../src/components/Contact"

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

      {/* Contact Section */}
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
