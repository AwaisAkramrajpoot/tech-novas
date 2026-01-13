"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and user management.",
    tags: ["Next.js", "PostgreSQL", "Chart.js"],
  },
  {
    title: "Healthcare System",
    description: "Comprehensive healthcare management platform with appointment scheduling and records.",
    tags: ["React", "Firebase", "Stripe"],
  },
  {
    title: "Mobile App",
    description: "Native mobile application for iOS and Android with offline functionality.",
    tags: ["React Native", "Redux", "AWS"],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Take a look at some of our most <span className="text-navy">recent projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-4"></div>
          <p className="text-lg text-medium-gray max-w-2xl">
            Showcase of our latest work and successful client implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-white border border-gray-200 hover:border-cyan-500 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-blue-900/0 group-hover:from-cyan-600/5 group-hover:to-blue-900/5 transition-all duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-medium-gray mb-4">{project.description}</p>
                <div className="flex gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-cyan-100 text-blue-900 rounded-full border border-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
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
  )
}
