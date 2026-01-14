"use client"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"

const projectsList = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Development",
    gradient: "from-orange-400 via-red-400 to-pink-500",
    pattern: "dots"
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive visualizations, user management, and data export capabilities.",
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    category: "Web Development",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    pattern: "grid"
  },
  {
    title: "Mobile Fitness App",
    description:
      "Cross-platform fitness tracking application with workout plans, progress tracking, and social features.",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "Mobile Development",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    pattern: "dots"
  },
  {
    title: "Enterprise CRM System",
    description: "Custom CRM built for managing client relationships, sales pipelines, and team collaboration.",
    technologies: ["Next.js", "PostgreSQL", "Socket.io"],
    category: "Custom Software",
    gradient: "from-gray-800 via-gray-700 to-gray-900",
    pattern: "grid"
  },
  {
    title: "AI-Powered Content Platform",
    description: "Intelligent content management system with AI-powered recommendations and automation.",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    category: "Custom Software",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    pattern: "dots"
  },
  {
    title: "Real Estate Management App",
    description: "Property management application with virtual tours, tenant communication, and maintenance tracking.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    category: "Mobile Development",
    gradient: "from-yellow-400 via-orange-400 to-red-500",
    pattern: "grid"
  },
]

export default function Projects() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>

      <Navbar />
      <main className="pt-5">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Take a look at some of our most{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                recent projects
              </span>
            </h1>
            <div className="w-24 h-1.5 bg-cyan-600 mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Explore our portfolio of successful projects that showcase our expertise across various industries and
              technologies.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {projectsList.map((project, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Project Mockup Image */}
                    <div className={`relative h-72 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                      {/* Decorative background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        {project.pattern === 'dots' ? (
                          <div 
                            className="absolute inset-0" 
                            style={{
                              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                              backgroundSize: '30px 30px'
                            }}
                          ></div>
                        ) : (
                          <div 
                            className="absolute inset-0" 
                            style={{
                              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                              backgroundSize: '50px 50px'
                            }}
                          ></div>
                        )}
                      </div>
                      
                      {/* Mockup Devices */}
                      <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                        {/* Desktop mockup */}
                        <div className="relative w-full max-w-md bg-gray-900 rounded-lg shadow-2xl overflow-hidden transform -rotate-1">
                          {/* Browser bar */}
                          <div className="bg-gray-800 px-3 py-2 flex items-center space-x-2">
                            <div className="flex space-x-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 bg-gray-700 rounded px-2 py-1 text-xs text-gray-400">
                              {project.title.toLowerCase().replace(/\s+/g, '')}.com
                            </div>
                          </div>
                          {/* Screen content */}
                          <div className="bg-white h-40 p-4">
                            <div className="space-y-2">
                              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                              <div className="mt-4 grid grid-cols-3 gap-2">
                                <div className="h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded"></div>
                                <div className="h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded"></div>
                                <div className="h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mobile mockup */}
                        <div className="absolute right-8 bottom-4 w-20 bg-gray-900 rounded-xl shadow-2xl overflow-hidden transform rotate-6">
                          <div className="bg-white h-32 p-2">
                            <div className="space-y-1.5">
                              <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                              <div className="mt-2 space-y-1">
                                <div className="h-8 bg-gradient-to-r from-cyan-100 to-blue-100 rounded"></div>
                                <div className="h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
                      <div className="absolute bottom-8 right-12 w-6 h-6 bg-white/20 rounded-full animate-float-delayed"></div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-semibold bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full whitespace-nowrap">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}