"use client"

import { Code2, Smartphone, Palette, Zap, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title:
      "App Development",
    description:
      "Native and cross-platform mobile applications designed for seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that combine aesthetics with functionality.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Insight-driven analytics solutions that help businesses make smarter, data-backed decisions.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-cyan-600">Services</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-4"></div>
          <p className="text-lg text-medium-gray max-w-2xl">
            Comprehensive software solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="
                  group p-6 rounded-xl border border-gray-200
                  bg-white
                  hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-900
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-cyan-500/30
                  hover:-translate-y-1
                  animate-fade-in-up
                "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12 rounded-lg flex items-center justify-center mb-4
                    bg-gradient-to-br from-cyan-500 to-blue-900
                    group-hover:bg-white
                    transition-all duration-300
                  "
                >
                  <Icon
                    size={24}
                    className="text-white group-hover:text-blue-900 transition-colors duration-300"
                  />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-medium-gray group-hover:text-cyan-100 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
