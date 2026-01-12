"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, MessageSquare, Users, TrendingUp, Share2 } from "lucide-react"
import Link from "next/link"

export default function SocialMediaMarketing() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4">
              Social Media <span className="text-cyan-600">Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Engage, grow, and convert your audience across all social platforms
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-navy mb-6">Build Your Social Presence</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We create compelling social media strategies that engage your audience, build brand loyalty, and drive
                conversions across Facebook, Instagram, LinkedIn, TikTok, and more.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Social Media Strategy",
                  "Content Creation",
                  "Community Management",
                  "Paid Advertising",
                  "Influencer Partnerships",
                  "Performance Analytics",
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
                Build Your Strategy
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {[
                { icon: Users, title: "Audience Growth", desc: "Real Followers" },
                { icon: MessageSquare, title: "Engagement", desc: "Active Community" },
                { icon: TrendingUp, title: "Growth", desc: "Consistent Progress" },
                { icon: Share2, title: "Viral Potential", desc: "Shareable Content" },
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
            <h2 className="text-4xl font-bold text-navy mb-2 text-center">Platforms We Master</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full mx-auto mb-12"></div>

            <div className="grid md:grid-cols-5 gap-6">
              {["Facebook", "Instagram", "LinkedIn", "TikTok", "Twitter/X"].map((platform, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg border border-gray-200 text-center hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <p className="font-semibold text-navy">{platform}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Go Viral?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our social media experts will elevate your brand across all platforms
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg"
          >
            Start Growing Today
            <ArrowRight size={20} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
