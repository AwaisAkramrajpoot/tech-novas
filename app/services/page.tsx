import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Code2, Smartphone, Palette, Zap, GitBranch, Layers } from "lucide-react"

const allServices = [
  {
    icon: Code2,
    title: "Web Development",
    description: "We build responsive, fast, and scalable web applications using modern frameworks and technologies.",
    features: ["React/Next.js", "Progressive Web Apps", "Performance Optimization", "SEO Optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
    features: ["iOS & Android", "Flutter/React Native", "App Store Optimization", "Push Notifications"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that combine aesthetics with user-centered functionality.",
    features: ["User Research", "Wireframing", "Visual Design", "Prototyping & Testing"],
  },
  {
    icon: Zap,
    title: "Custom Software",
    description: "Tailored solutions built specifically for your unique business requirements and challenges.",
    features: ["Enterprise Systems", "API Development", "Database Design", "System Integration"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Infrastructure",
    description: "Robust infrastructure solutions ensuring reliability, security, and scalability.",
    features: ["Cloud Deployment", "CI/CD Pipelines", "Server Management", "Security Hardening"],
  },
  {
    icon: Layers,
    title: "Maintenance & Support",
    description: "Ongoing technical support and maintenance to keep your systems running smoothly.",
    features: ["24/7 Monitoring", "Bug Fixes", "Updates & Patches", "Performance Tuning"],
  },
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-cyan-600">Services</span>
            </h1>
            <div className="w-16 h-1 bg-cyan-600 mb-6"></div>
            <p className="text-xl text-medium-gray leading-relaxed">
              Comprehensive software solutions tailored to your business needs. From concept to deployment, we handle
              every aspect of your project.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-medium-gray mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-medium-gray flex gap-2">
                          <span className="text-cyan-600 font-bold">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
            <p className="text-lg text-medium-gray mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                Schedule a Consultation
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
