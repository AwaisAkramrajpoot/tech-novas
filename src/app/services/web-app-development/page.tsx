"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Code2, Smartphone, Zap, Lock } from "lucide-react"
import Link from "next/link"

export default function WebAppDevelopment() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4">
              Web App <span className="text-cyan-600">Development</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Build scalable, modern web applications with cutting-edge technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-navy mb-6">Professional Web Solutions</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We create responsive, fast, and user-friendly web applications using the latest technologies including
                React, Next.js, Node.js, and more.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Responsive Design",
                  "Fast Performance",
                  "SEO Optimized",
                  "Secure Architecture",
                  "Scalable Backend",
                  "Real-time Updates",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg"
              >
                Start Your Project
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {[
                { icon: Code2, title: "Modern Stack", desc: "Latest Technologies" },
                { icon: Smartphone, title: "Responsive", desc: "All Devices" },
                { icon: Zap, title: "Lightning Fast", desc: "Optimized Performance" },
                { icon: Lock, title: "Secure", desc: "Enterprise Security" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white border border-gray-200 rounded-lg hover-lift animate-scale-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <item.icon className="w-10 h-10 text-cyan-600 mb-3" />
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="bg-gray-50 py-20 mt-20 animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-navy mb-2 text-center">Our Tech Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full mx-auto mb-12"></div>

            <div className="grid md:grid-cols-4 gap-6">
              {["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Docker", "AWS"].map(
                (tech, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-lg border border-gray-200 text-center hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <p className="font-semibold text-navy">{tech}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Build Your Web App?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our expert developers create a powerful web application for your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg"
          >
            Schedule Consultation
            <ArrowRight size={20} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
