import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"

const projectsList = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Development",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive visualizations, user management, and data export capabilities.",
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    category: "Web Development",
  },
  {
    title: "Mobile Fitness App",
    description:
      "Cross-platform fitness tracking application with workout plans, progress tracking, and social features.",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "Mobile Development",
  },
  {
    title: "Enterprise CRM System",
    description: "Custom CRM built for managing client relationships, sales pipelines, and team collaboration.",
    technologies: ["Next.js", "PostgreSQL", "Socket.io"],
    category: "Custom Software",
  },
  {
    title: "AI-Powered Content Platform",
    description: "Intelligent content management system with AI-powered recommendations and automation.",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    category: "Custom Software",
  },
  {
    title: "Real Estate Management App",
    description: "Property management application with virtual tours, tenant communication, and maintenance tracking.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    category: "Mobile Development",
  },
]

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-navy">Projects</span>
            </h1>
            <div className="w-16 h-1 bg-cyan-600 mb-6"></div>
            <p className="text-xl text-medium-gray leading-relaxed">
              Explore our portfolio of successful projects that showcase our expertise across various industries and
              technologies.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsList.map((project, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-blue-900/0 group-hover:from-cyan-600/5 group-hover:to-blue-900/5 transition-all duration-300 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-xs bg-cyan-100 text-blue-900 px-3 py-1 rounded-full border border-cyan-300">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-medium-gray mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
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
