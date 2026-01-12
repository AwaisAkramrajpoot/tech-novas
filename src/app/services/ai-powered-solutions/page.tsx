"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Zap, Brain, TrendingUp, Lightbulb, BarChart3, Shield } from "lucide-react"
import Link from "next/link"

export default function AIPoweredSolutions() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4">
              AI-Powered <span className="text-cyan-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Transform your business with cutting-edge artificial intelligence technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-navy mb-6">What We Offer</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our AI-powered solutions leverage the latest machine learning and deep learning technologies to automate
                processes, enhance decision-making, and unlock new opportunities for your business.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Machine Learning Models",
                  "Natural Language Processing",
                  "Computer Vision Solutions",
                  "Predictive Analytics",
                  "Chatbots & Virtual Assistants",
                  "Data-Driven Insights",
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
                Get Consultation
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {[
                { icon: Brain, title: "Smart AI", desc: "Intelligent Algorithms" },
                { icon: Zap, title: "Fast & Efficient", desc: "Real-time Processing" },
                { icon: TrendingUp, title: "Growth", desc: "Scalable Solutions" },
                { icon: Shield, title: "Secure", desc: "Enterprise Grade" },
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

        {/* Key Features */}
        <section className="bg-gray-50 py-20 mt-20 animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-navy mb-2 text-center">Key Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full mx-auto mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Advanced ML Models",
                  desc: "State-of-the-art machine learning models trained on your specific data",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Insights",
                  desc: "Transform raw data into actionable business intelligence",
                },
                {
                  icon: Lightbulb,
                  title: "Custom Solutions",
                  desc: "Tailored AI solutions designed for your unique business needs",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-lg border border-gray-200 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <feature.icon className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Implement AI Solutions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you unlock the full potential of artificial intelligence for your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg"
          >
            Start Your AI Journey
            <ArrowRight size={20} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
