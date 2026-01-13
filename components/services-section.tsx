"use client"

import { Code2, Smartphone, Palette, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications designed for seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that combine aesthetics with functionality.",
  },
  {
    icon: Zap,
    title: "Custom Software",
    description: "Tailored software solutions built to solve your unique business challenges.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-cyan-600">Services</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-4"></div>
          <p className="text-lg text-medium-gray max-w-2xl">
            Comprehensive software solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
