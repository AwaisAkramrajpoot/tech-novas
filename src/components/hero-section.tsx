"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div
          className="absolute bottom-20 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-300 rounded-full mb-6 hover:border-cyan-500 transition-all duration-300 animate-fade-in-down">
          <Sparkles size={16} className="text-cyan-600" />
          <span className="text-sm text-blue-900 font-medium">Welcome to the future of tech</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up stagger-1">
          <span className="text-gray-900">Transform Your Ideas into</span>
          <br />
          <span className="text-navy underline-cyan">Powerful Solutions</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-medium-gray mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
          Novaa Tech delivers innovative software solutions tailored to your business needs. From web development to
          custom software, we turn your vision into reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-3">
          <Link href="/contact">
            <button className="px-8 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-cyan-500/30">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 pt-12 border-t border-gray-200 animate-fade-in-up stagger-4">
          <div className="hover-lift">
            <p className="text-3xl md:text-4xl font-bold text-blue-900">50+</p>
            <p className="text-medium-gray text-sm md:text-base">Projects Completed</p>
          </div>
          <div className="hover-lift">
            <p className="text-3xl md:text-4xl font-bold text-cyan-600">30+</p>
            <p className="text-medium-gray text-sm md:text-base">Happy Clients</p>
          </div>
          <div className="hover-lift">
            <p className="text-3xl md:text-4xl font-bold text-blue-900">8+</p>
            <p className="text-medium-gray text-sm md:text-base">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
