"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Wrench, BarChart3, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function MaintenanceSupport() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4">
              Application Maintenance <span className="text-cyan-600">& Support</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Keep your applications running smoothly with professional support
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-navy mb-6">Reliable Support & Maintenance</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We provide comprehensive maintenance and support services to ensure your applications remain secure,
                performant, and up-to-date with the latest technologies and best practices.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "24/7 Support & Monitoring",
                  "Bug Fixes & Patches",
                  "Performance Optimization",
                  "Security Updates",
                  "Backup & Recovery",
                  "Technical Documentation",
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
                Get Support Plan
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {[
                { icon: Clock, title: "24/7 Monitoring", desc: "Always Available" },
                { icon: Shield, title: "Security", desc: "Protected Systems" },
                { icon: Wrench, title: "Maintenance", desc: "Regular Updates" },
                { icon: BarChart3, title: "Performance", desc: "Optimized Speed" },
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

        <section className="bg-gray-50 py-20 mt-20 animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-navy mb-2 text-center">Support Plans</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full mx-auto mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$500/mo", features: ["Email Support", "Monthly Updates", "Basic Monitoring"] },
                {
                  name: "Professional",
                  price: "$1500/mo",
                  features: ["24/7 Phone Support", "Weekly Updates", "Advanced Monitoring"],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: ["Dedicated Support", "Daily Updates", "Full-Stack Monitoring"],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-lg border border-gray-200 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-cyan-600 mb-6">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="text-gray-600">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-6">Let Us Handle Your Maintenance</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Focus on your business while we keep your applications secure and performing at their best
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg"
          >
            Choose Your Plan
            <ArrowRight size={20} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
