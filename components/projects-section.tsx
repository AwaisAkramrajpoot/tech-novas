"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-orange-400 via-red-400 to-pink-500",
    pattern: "dots"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics platform with interactive visualizations and user management.",
    tags: ["React", "D3.js", "MongoDB"],
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    pattern: "grid"
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with workout plans and progress tracking.",
    tags: ["React Native", "Firebase", "Redux"],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    pattern: "dots"
  },
  {
    title: "Enterprise CRM System",
    description: "Custom CRM built for managing client relationships and sales pipelines.",
    tags: ["Next.js", "PostgreSQL", "Socket.io"],
    gradient: "from-gray-800 via-gray-700 to-gray-900",
    pattern: "grid"
  },
]

export function ProjectsSection() {
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

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Take a look at some of our most{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                recent projects
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-600 mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Showcase of our latest work and successful client implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Project Mockup Image */}
                  <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
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
                    <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
                      {/* Desktop mockup */}
                      <div className="relative w-full max-w-sm bg-gray-900 rounded-lg shadow-2xl overflow-hidden transform -rotate-1">
                        {/* Browser bar */}
                        <div className="bg-gray-800 px-2 py-1.5 flex items-center space-x-1.5">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex-1 bg-gray-700 rounded px-2 py-0.5 text-[10px] text-gray-400">
                            {project.title.toLowerCase().replace(/\s+/g, '')}.com
                          </div>
                        </div>
                        {/* Screen content */}
                        <div className="bg-white h-32 p-3">
                          <div className="space-y-1.5">
                            <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
                            <div className="mt-3 grid grid-cols-3 gap-1.5">
                              <div className="h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded"></div>
                              <div className="h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded"></div>
                              <div className="h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Mobile mockup */}
                      <div className="absolute right-6 bottom-3 w-16 bg-gray-900 rounded-lg shadow-2xl overflow-hidden transform rotate-6">
                        <div className="bg-white h-24 p-1.5">
                          <div className="space-y-1">
                            <div className="h-0.5 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-0.5 bg-gray-200 rounded w-1/2"></div>
                            <div className="mt-1.5 space-y-0.5">
                              <div className="h-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded"></div>
                              <div className="h-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-3 left-3 w-6 h-6 bg-white/20 rounded-full animate-float"></div>
                    <div className="absolute bottom-6 right-10 w-5 h-5 bg-white/20 rounded-full animate-float-delayed"></div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs bg-cyan-100 text-cyan-700 rounded-full border border-cyan-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Link href="/projects">
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 hover:shadow-lg">
                View All Projects
                <ExternalLink size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}