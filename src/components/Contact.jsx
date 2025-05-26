"use client"

import { Mail, MapPin, Building } from "lucide-react"

export default function Contact() {
  return (
    <div className="w-full bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Contact</h2>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        {/* Contact Information - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
            <div className="text-center">
              <Mail className="text-gray-400 mx-auto mb-3" size={20} />
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <a
                href="mailto:oezen1@uni-potsdam.de"
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                oezen1@uni-potsdam.de
              </a>
            </div>
          </div>

          {/* Office */}
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
            <div className="text-center">
              <MapPin className="text-gray-400 mx-auto mb-3" size={20} />
              <p className="text-gray-400 text-sm mb-2">Office</p>
              <p className="text-white text-sm leading-relaxed">
                Karl-Liebknecht-Straße 24/25
                <br />
                Haus-28 Room 2.032,
                <br />
                14476 Potsdam Nord, Golm
              </p>
            </div>
          </div>

          {/* Institution */}
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
            <div className="text-center">
              <Building className="text-gray-400 mx-auto mb-3" size={20} />
              <p className="text-gray-400 text-sm mb-2">Institution</p>
              <p className="text-white text-sm leading-relaxed">
                University of Potsdam
                <br />
                Institute of Physics and Astronomy
                <br />
                Soft Matter Physics and Optoelectronics Group
                <br />
                <span className="text-gray-300">ROSI subgroup</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
