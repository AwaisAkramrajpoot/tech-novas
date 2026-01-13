"use client"

import type React from "react"
import { Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for reaching out! We'll get back to you soon.")
  }

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Book a <span className="text-cyan-600">Free</span> 30 Minute Session
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  What are you seeking? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                  placeholder="Project inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Comment or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up stagger-1">
            {/* Stats */}
            <div className="mb-12">
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div>
                  <p className="text-4xl font-bold text-blue-900 mb-1">8+</p>
                  <p className="text-medium-gray font-semibold">Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-cyan-600 mb-1">40+</p>
                  <p className="text-medium-gray font-semibold">Clients</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-900 mb-1">200+</p>
                  <p className="text-medium-gray font-semibold">Successful Projects</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-medium-gray">36 CCA1, Central Commercial Area</p>
                  <p className="text-medium-gray">Sector I Phase I Dha Rahbar, Lahore</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-medium-gray">hello@novaatech.com</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all duration-300"
                  >
                    <span className="text-cyan-600 hover:text-white">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all duration-300"
                  >
                    <span className="text-cyan-600">@</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all duration-300"
                  >
                    <span className="text-cyan-600">in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
