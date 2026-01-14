"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Bilal",
    role: "CEO, TechStart Inc",
    content:
      "I'm still working with Novaa Tech and they has high skills in websites, Zoho CRM and iOS/android applications. Excellent Job!",
    rating: 5,
  },
  {
    name: "Tariq",
    role: "Product Lead, InnovateCo",
    content:
      "Novaa Tech delivered a great job! Highly skilled and professional, with excellent communication throughout the project. We're very happy to work with them.",
    rating: 5,
  },
  {
    name: "Oliver",
    role: "Founder, GrowthLabs",
    content:
      "Novaa Tech joined our team to work on a difficult project and distinguished itself through a strong can-do attitude, along with the speed and high quality of its work.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What Our <span className="text-cyan-600">Customers Say?</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-4"></div>
          <p className="text-lg text-medium-gray max-w-2xl">
            Real stories from companies we've helped transform through technology.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                group relative p-6 rounded-xl border border-gray-200
                bg-white
                hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-900
                transition-all duration-300
                hover:shadow-lg hover:shadow-cyan-500/30
                hover:-translate-y-1
                animate-fade-in-up
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-lg
                              bg-gradient-to-br from-cyan-500 to-blue-900
                              opacity-20 group-hover:opacity-40 transition-opacity" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-cyan-600 text-cyan-600 group-hover:fill-white group-hover:text-white transition-colors duration-300"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-4 leading-relaxed italic
                            text-gray-700
                            group-hover:text-cyan-100 transition-colors duration-300">
                {testimonial.content}
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {testimonial.name}
                </p>
                <p className="text-sm text-medium-gray group-hover:text-cyan-200 transition-colors duration-300">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
