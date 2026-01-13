"use client"

import { Navbar } from "../../../components/navbar"
import { Footer } from "../../../components/footer"
import { ArrowRight, Database, Zap, Lock, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ExcelToWebApp() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4">
              Excel to <span className="text-cyan-600">AI-Powered Web App</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Transform your Excel spreadsheets into intelligent web applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-navy mb-6">Convert Data to Power</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We seamlessly convert your Excel-based workflows into modern web applications with AI integration,
                automation, and real-time analytics capabilities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Automated Data Processing",
                  "Cloud-Based Access",
                  "Real-time Collaboration",
                  "AI-Powered Predictions",
                  "Advanced Reporting",
                  "Mobile Responsive Design",
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
                Get Started
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {[
                { icon: Database, title: "Data Security", desc: "Enterprise Level" },
                { icon: Zap, title: "Fast Access", desc: "Cloud Powered" },
                { icon: BarChart3, title: "Analytics", desc: "Smart Insights" },
                { icon: Lock, title: "Encrypted", desc: "Secure Data" },
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

        {/* Benefits Section */}
        <section className="bg-gray-50 py-20 mt-20 animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-navy mb-2 text-center">Benefits</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full mx-auto mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Increased Efficiency",
                  desc: "Automate repetitive tasks and reduce manual data entry by up to 80%",
                },
                {
                  title: "Better Collaboration",
                  desc: "Enable team members to work together in real-time from anywhere",
                },
                {
                  title: "Scalable Solution",
                  desc: "Grow your data management without complex spreadsheet maintenance",
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-lg border border-gray-200 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Transform Your Excel?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts will help you migrate and enhance your spreadsheet-based workflows
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg"
          >
            Request Demo
            <ArrowRight size={20} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
