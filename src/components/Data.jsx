"use client"

import { useState } from "react"
import { X, Download, Star, Users, Zap, Shield } from "lucide-react" // If you've installed lucide-react

export default function Data() {
  const [selectedTool, setSelectedTool] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState(null)

  // Featured tools with more marketing-focused descriptions
  const featuredTools = [
    {
      id: "jv-plotter",
      title: "JV Curve Analyzer Pro",
      icon: <Zap size={36} className="text-blue-400" />,
      content: "Accelerate your research with comprehensive JV curve analysis. Save hours of manual processing time.",
      benefits: [
        "Automatic parameter extraction (Voc, Jsc, FF, PCE)",
        "Batch processing of multiple measurements",
        "Publication-ready graphs with one click",
        "Customizable analysis parameters",
      ],
      detailedContent: `
        ## Transform Your Solar Cell Research

        The JV Curve Analyzer Pro provides essential visualization and analysis of current-voltage curves for solar cell characterization, saving you hours of manual processing time.
        
        ### Key Features
        • Interactive plotting with zoom and pan capabilities
        • Automatic calculation of key parameters (Voc, Jsc, FF, PCE)
        • Comparison of multiple JV curves
        • Export options for publication-quality figures
        • Batch processing for large datasets
        
        ### Research Impact
        Researchers using our JV Curve Analyzer report:
        • 70% reduction in data processing time
        • Improved reproducibility in parameter extraction
        • Higher quality visualizations for publications
        
        ### Technical Details
        • Built with Python, NumPy, and Matplotlib
        • Optimized algorithms for fast processing
        • Regular updates with new features
      `,
      videoUrl: "/placeholder-video.mp4", // Replace with actual video URL
    },
    {
      id: "stability-tracker",
      title: "Stability Tracker Suite",
      icon: <Shield size={36} className="text-green-400" />,
      content:
        "Track device degradation with precision. Identify stability bottlenecks and optimize your devices faster.",
      benefits: [
        "Automated degradation rate calculation",
        "Comparative analysis across multiple devices",
        "Environmental factor correlation",
        "Predictive stability modeling",
      ],
      detailedContent: `
        ## Master Device Stability Analysis

        The Stability Tracker Suite is our most comprehensive tool for in-depth analysis of solar cell performance over time, helping you identify and solve stability challenges.
        
        ### Key Features
        • Temporal tracking of all performance parameters
        • Automated degradation rate calculation
        • Statistical analysis of device-to-device variation
        • Identification of performance bottlenecks
        • Correlation with environmental factors
        
        ### Research Impact
        Stability Tracker has been instrumental in:
        • Identifying primary degradation mechanisms
        • Quantifying the impact of encapsulation strategies
        • Developing accelerated aging protocols
        • Publishing high-impact stability studies
        
        ### Technical Details
        • Python-based with advanced statistical packages
        • Machine learning algorithms for pattern recognition
        • Customizable visualization options
      `,
      videoUrl: "/placeholder-video.mp4",
    },
    {
      id: "spectral-suite",
      title: "Spectral Analysis Suite",
      icon: <Star size={36} className="text-purple-400" />,
      content:
        "Comprehensive spectroscopy tools for PL, EQE, and absorption analysis. Extract meaningful insights from your data.",
      benefits: [
        "Multi-peak fitting algorithms",
        "Bandgap and Urbach energy extraction",
        "Temperature-dependent analysis",
        "Integrated with solar spectrum data",
      ],
      detailedContent: `
        ## Unlock the Power of Spectroscopy

        The Spectral Analysis Suite combines multiple spectroscopic analysis tools in one powerful package, giving you deeper insights into material properties.
        
        ### Key Features
        • PL peak fitting with multiple Gaussian/Lorentzian components
        • EQE analysis with integrated Jsc calculation
        • Bandgap extraction from multiple methods
        • Temperature-dependent PL analysis
        • Urbach energy calculation
        
        ### Research Impact
        Our spectral tools have enabled researchers to:
        • Identify subtle changes in material composition
        • Quantify defect densities and energies
        • Correlate optical properties with device performance
        • Publish higher quality spectroscopic analyses
        
        ### Technical Details
        • Advanced fitting algorithms for complex spectra
        • Built-in reference data for common materials
        • Batch processing capabilities
        • Publication-quality visualization
      `,
      videoUrl: "/placeholder-video.mp4",
    },
    {
      id: "advanced-imaging",
      title: "Advanced Imaging Toolkit",
      icon: <Users size={36} className="text-red-400" />,
      content: "Process and analyze microscopy and diffraction data. From SEM to GIWAXS, all in one powerful package.",
      benefits: [
        "Automated image analysis",
        "Crystallite size calculation",
        "Phase identification",
        "Orientation analysis",
      ],
      detailedContent: `
        ## See Beyond the Surface

        The Advanced Imaging Toolkit transforms complex imaging and diffraction data into quantitative insights about your materials.
        
        ### Key Features
        • SEM image analysis with grain size distribution
        • XRD pattern processing and phase identification
        • GIWAXS data conversion and analysis
        • Crystallite size estimation
        • Orientation distribution calculation
        
        ### Research Impact
        Researchers using our imaging tools have:
        • Quantified morphological changes during degradation
        • Correlated structural properties with performance
        • Identified optimal processing conditions
        • Streamlined the analysis of large imaging datasets
        
        ### Technical Details
        • Python-based with OpenCV and scikit-image
        • Database integration for phase identification
        • Advanced algorithms for pattern recognition
        • Customizable analysis parameters
      `,
      videoUrl: "/placeholder-video.mp4",
    },
  ]

  // Donation/pricing tiers
  const pricingTiers = [
    {
      id: "basic",
      name: "Basic Access",
      price: "€5",
      description: "Access to individual tools with basic features",
      features: ["Download individual tools", "Basic documentation", "Community support", "Monthly updates"],
      recommended: false,
      buttonText: "Get Started",
    },
    {
      id: "researcher",
      name: "Researcher",
      price: "€15",
      description: "Full access to all tools with advanced features",
      features: [
        "Access to ALL tools",
        "Comprehensive documentation",
        "Priority email support",
        "Advanced features unlocked",
        "Regular updates",
      ],
      recommended: true,
      buttonText: "Best Value",
    },
    {
      id: "lab",
      name: "Research Lab",
      price: "€30",
      description: "Multi-user license for research groups",
      features: [
        "5-user license",
        "All advanced features",
        "Priority support",
        "Custom tool modifications",
        "Implementation assistance",
        "Acknowledgment in publications",
      ],
      recommended: false,
      buttonText: "Upgrade Lab",
    },
  ]

  const handleToolClick = (tool) => {
    setSelectedTool(tool)
  }

  const closeModal = () => {
    setSelectedTool(null)
  }

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan)
    // Here you would typically redirect to a payment/donation page
    // For now, we'll just show an alert
    alert(`Thank you for selecting the ${plan.name} plan! This would redirect to a payment page.`)
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Research Tools for Photovoltaics</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Professional-grade Python tools for solar cell research, developed by scientists for scientists.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium mx-2 transition-all duration-300"
          >
            Get Access
          </button>
          <button
            onClick={() => document.getElementById("tools").scrollIntoView({ behavior: "smooth" })}
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium mx-2 transition-all duration-300"
          >
            Explore Tools
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Why Use Our Tools?</h2>
          <p className="text-gray-400 mt-2">Developed during years of research at leading institutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Save Research Time</h3>
            <p className="text-gray-300">
              Automate repetitive analysis tasks and focus on interpreting results instead of processing data.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="bg-purple-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Publication-Quality Results</h3>
            <p className="text-gray-300">
              Generate consistent, reproducible analyses and beautiful visualizations ready for your next paper.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="bg-green-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Deeper Insights</h3>
            <p className="text-gray-300">
              Uncover patterns and correlations in your data that might be missed with basic analysis methods.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Tools Section */}
      <div id="tools" className="mb-20 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Tools</h2>
          <p className="text-gray-400 mt-2">Specialized software for perovskite and solar cell research</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 cursor-pointer group"
              onClick={() => handleToolClick(tool)}
            >
              <div className="p-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{tool.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-300 mt-2">{tool.content}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {tool.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 text-blue-400 font-medium flex items-center group-hover:underline">
                  Learn more
                  <svg
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing/Donation Section */}
      <div id="pricing" className="mb-20 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Support This Research</h2>
          <p className="text-gray-400 mt-2">Your contribution helps maintain and improve these tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((plan) => (
            <div
              key={plan.id}
              className={`bg-gray-800 rounded-xl border ${
                plan.recommended ? "border-blue-500 ring-2 ring-blue-500 ring-opacity-50" : "border-gray-700"
              } p-8 flex flex-col relative`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400"> one-time donation</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(plan)}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.recommended
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>All donations directly support ongoing research and tool development.</p>
          <p className="mt-2">
            For academic collaborations or custom tool development, please{" "}
            <a href="#" className="text-blue-400 hover:underline">
              contact me
            </a>
            .
          </p>
        </div>
      </div>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-6xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-8 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                {typeof X !== "undefined" ? (
                  <X size={24} />
                ) : (
                  <div className="w-6 h-6 relative">
                    <div className="absolute w-full h-0.5 bg-current top-1/2 left-0 transform -translate-y-1/2 rotate-45"></div>
                    <div className="absolute w-full h-0.5 bg-current top-1/2 left-0 transform -translate-y-1/2 -rotate-45"></div>
                  </div>
                )}
              </button>

              <div className="flex items-center mb-6">
                <div className="mr-4">{selectedTool.icon}</div>
                <h2 className="text-3xl font-bold text-white">{selectedTool.title}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Video Demo Section */}
                <div className="bg-gray-950 rounded-lg overflow-hidden lg:col-span-3">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <p className="text-gray-400">Video demonstration will appear here</p>
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                <div className="lg:col-span-2">
                  <div className="prose prose-invert max-w-none">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedTool.detailedContent
                          .replace(/\n/g, "<br>")
                          .replace(/^## (.*$)/gm, "<h2>$1</h2>")
                          .replace(/^### (.*$)/gm, "<h3>$1</h3>")
                          .replace(/• (.*$)/gm, "<li>$1</li>")
                          .replace(/<li>/g, "<ul><li>")
                          .replace(/<\/li>\n/g, "</li></ul>"),
                      }}
                    />
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                    >
                      <Download size={18} className="mr-2" />
                      Get Access to This Tool
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
