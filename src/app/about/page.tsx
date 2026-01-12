"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronDown, Star, ShoppingCart, Activity, BookOpen, DollarSign, Building2 } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Does Novaa Tech only provide web3 technology services?",
    answer:
      "At Novaa Tech, we go beyond web3, blockchain & metaverse to help businesses transform through technology. We help start-ups and established businesses in building products that make a difference and increase profitability.",
  },
  {
    question: "What technology services do you provide?",
    answer:
      "We provide comprehensive services including web development, mobile app development, UI/UX design, custom software solutions, DevOps, and system integration tailored to your specific needs.",
  },
  {
    question: "I have an idea and I want to develop a solution, how can Novaa Tech help?",
    answer:
      "We work with you from ideation through deployment. Our team handles strategy, design, development, testing, and launch. We ensure a seamless and transparent workflow with regular communication.",
  },
  {
    question: "How does Novaa Tech meet deadlines?",
    answer:
      "We employ agile methodologies with clear sprint planning, regular reviews, and risk management to ensure timely delivery while maintaining quality standards.",
  },
  {
    question: "How can I track the progress of my project if I work with Novaa Tech?",
    answer:
      "We provide dedicated project managers, regular status updates, sprint reviews, and transparent communication channels so you're always informed about your project's progress.",
  },
  {
    question: "How does Novaa Tech meet deadlines?",
    answer:
      "We follow a rigorous project management approach with clear milestones, regular check-ins, and dedicated support to ensure on-time delivery.",
  },
]

const coreValues = [
  {
    icon: Star,
    title: "Commitment",
    description: "Our team of experts is committed to executing your ideas and grow your business.",
  },
  {
    icon: ShoppingCart,
    title: "Consistency",
    description: "We turn your idea into a reality with consistency and dedication.",
  },
  {
    icon: Activity,
    title: "Transparency",
    description: "We believe you should know what's going on with your project and we make sure you do.",
  },
]

const industries = [
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Activity, label: "Healthcare" },
  { icon: BookOpen, label: "Education" },
  { icon: Building2, label: "Hospitality" },
  { icon: DollarSign, label: "Fintech" },
  { icon: Building2, label: "Real Estate" },
]

export default function About() {
  const [expandedFAQ, setExpandedFAQ] = useState(0)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-navy underline-cyan">Tech Solutions</span> Drive
              <br />
              Your Success.
            </h1>
            <p className="text-lg text-medium-gray leading-relaxed max-w-2xl">
              We are more than just a technology consulting organization – we are your strategic partners in success.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fade-in-up">
              Our <span className="text-navy">Inspiring</span> <span className="text-cyan-600">Vision</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-600 mb-8 animate-slide-in-left"></div>

            <div className="space-y-6 text-medium-gray leading-relaxed animate-fade-in-up stagger-1">
              <p>
                At <span className="font-semibold text-navy">Novaa Tech</span>, we envision a world empowered by
                technology, where businesses and individuals thrive through innovative and efficient software solutions.
                Our mission is to be a driving force behind this transformation, providing cutting-edge software
                services that elevate businesses to new heights of success.
              </p>

              <p>
                Our future vision is nothing short of big. We aspire to become a leading player in the software
                industry, known for delivering cutting-edge solutions that make a positive impact on businesses and
                individuals worldwide. We aim to be at the forefront of technological advancements, providing our
                clients with innovative and forward-looking software services.
              </p>

              <p>
                Our team of passionate and skilled professionals embodies our vision, working diligently to turn ideas
                into reality. We believe in collaborative partnerships, and our clients' success is our ultimate goal.
              </p>

              <p>
                <span className="font-semibold text-navy">Transparency, integrity, and excellence</span> form the
                pillars of our work culture. We are dedicated to delivering results with the highest level of quality,
                meeting deadlines, and exceeding expectations at every turn.
              </p>

              <p>
                Let <span className="font-semibold text-navy">Novaa Tech</span> be your trusted partner in navigating
                the ever-evolving digital landscape and realizing your vision for success.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fade-in-up">
              Our <span className="text-navy">Core</span> <span className="text-cyan-600">Values</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-600 mb-12 animate-slide-in-left"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="p-8 rounded-xl bg-white border border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover-lift animate-fade-in-up text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-medium-gray">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fade-in-up">
              Industries we work <span className="text-navy">with</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-600 mb-4 animate-slide-in-left"></div>
            <p className="text-lg text-medium-gray mb-12 animate-fade-in-up stagger-1">
              Our expertise in various industries
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white border border-gray-200 hover:border-cyan-500 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
                      <Icon size={28} className="text-cyan-600" />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{industry.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fade-in-up">
              Frequently asked <span className="text-navy">questions</span>
            </h2>
            <div className="w-16 h-1 bg-cyan-600 mb-12 animate-slide-in-left"></div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                    className={`w-full p-6 rounded-lg font-semibold text-left transition-all duration-300 flex justify-between items-center ${
                      expandedFAQ === index
                        ? "bg-gradient-to-r from-cyan-500 to-blue-900 text-white shadow-lg shadow-cyan-500/30"
                        : "bg-white border border-gray-200 text-gray-900 hover:border-cyan-500"
                    }`}
                  >
                    <span className="text-sm md:text-base">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                        expandedFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedFAQ === index && (
                    <div className="p-6 bg-white border border-t-0 border-gray-200 rounded-b-lg animate-fade-in-up text-medium-gray">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6 md:gap-12">
              <div className="text-center hover-lift animate-fade-in-up">
                <p className="text-4xl md:text-5xl font-bold text-navy mb-2">7+</p>
                <p className="text-medium-gray font-semibold">Years Experience</p>
              </div>
              <div className="text-center hover-lift animate-fade-in-up stagger-1">
                <p className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">40+</p>
                <p className="text-medium-gray font-semibold">Clients</p>
              </div>
              <div className="text-center hover-lift animate-fade-in-up stagger-2">
                <p className="text-4xl md:text-5xl font-bold text-navy mb-2">200+</p>
                <p className="text-medium-gray font-semibold">Successful Projects</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
