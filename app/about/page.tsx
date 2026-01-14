"use client"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { ChevronDown, Star, ShoppingCart, Activity, BookOpen, DollarSign, Building2, Target, Lightbulb, Users, Award, CheckCircle2, TrendingUp } from "lucide-react"
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
    question: "What makes Novaa Tech different from other software companies?",
    answer:
      "Our commitment to transparency, client-centric approach, and deep technical expertise set us apart. We don't just build software; we build long-term partnerships and deliver solutions that drive real business results.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance and support services to ensure your application runs smoothly, stays updated with the latest technologies, and continues to meet your evolving business needs.",
  },
]

const coreValues = [
  {
    icon: Star,
    title: "Commitment",
    description: "We are dedicated to executing your ideas with precision and excellence, ensuring every project receives our full attention and expertise to help your business grow.",
  },
  {
    icon: Target,
    title: "Consistency",
    description: "We deliver reliable, high-quality solutions consistently, maintaining the same level of dedication and attention to detail from project inception to completion.",
  },
  {
    icon: Activity,
    title: "Transparency",
    description: "We believe in complete openness. You'll always know what's happening with your project through regular updates, clear communication, and honest feedback.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology, constantly exploring new tools, frameworks, and methodologies to deliver cutting-edge solutions that give you a competitive advantage.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, fostering strong partnerships built on trust, mutual respect, and shared goals to achieve exceptional results together.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is non-negotiable. We strive for excellence in every line of code, every design element, and every client interaction, ensuring superior outcomes every time.",
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

const whyChooseUs = [
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "7+ years of experience delivering 200+ successful projects to satisfied clients worldwide."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our talented developers, designers, and strategists bring deep technical expertise and creative problem-solving."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "We build software that grows with your business, ensuring long-term value and adaptability."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure bug-free, high-performance applications."
  },
]

export default function About() {
  const [expandedFAQ, setExpandedFAQ] = useState(0)

  return (
    <>
      <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-navy">Tech Solutions</span> Drive Your Success
          </h1>
          <div className="w-16 h-1 bg-cyan-600 mb-4"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are more than just a technology consulting organization – we are your strategic partners in digital transformation and business success.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Who <span className="text-navy">We Are</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-6"></div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <span className="font-semibold text-navy">Novaa Tech</span> is a forward-thinking software development company specializing in creating innovative digital solutions that empower businesses to thrive in the modern technological landscape. Founded with a vision to bridge the gap between business challenges and technology solutions, we have established ourselves as a trusted partner for startups, SMEs, and enterprises across various industries.
            </p>

            <p>
              Our team comprises passionate software engineers, creative designers, strategic thinkers, and dedicated project managers who share a common goal: delivering exceptional software that makes a real difference. With expertise spanning web development, mobile applications, custom software, AI integration, and digital transformation, we bring comprehensive technical capabilities to every project.
            </p>

            <p>
              What sets us apart is our commitment to understanding your unique business needs. We don't believe in one-size-fits-all solutions. Instead, we take time to analyze your requirements, understand your target audience, and craft tailored solutions that align perfectly with your business objectives and budget.
            </p>

            <p>
              Based on our <span className="font-semibold text-navy">agile methodology</span> and client-centric approach, we ensure transparent communication, timely delivery, and measurable results. Every project we undertake is treated with the same level of dedication, whether it's building an MVP for a startup or developing enterprise-grade software for established organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Our <span className="text-cyan-600">Mission</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-6"></div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Our mission is to <span className="font-semibold text-navy">empower businesses through innovative technology solutions</span> that drive growth, enhance efficiency, and create lasting competitive advantages. We strive to be the catalyst that transforms your digital vision into reality, delivering software that not only meets but exceeds expectations.
            </p>

            <p>
              We are committed to democratizing access to world-class software development services, making cutting-edge technology accessible to businesses of all sizes. Whether you're a startup looking to disrupt the market or an established enterprise seeking digital transformation, our mission is to provide you with the tools, expertise, and support needed to succeed.
            </p>

            <p>
              Through continuous innovation, ethical practices, and unwavering dedication to quality, we aim to build long-term partnerships with our clients. We measure our success not just by the software we deliver, but by the tangible business results our clients achieve – increased revenue, improved customer satisfaction, operational efficiency, and market leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Our <span className="text-navy">Vision</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-6"></div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              At <span className="font-semibold text-navy">Novaa Tech</span>, we envision a world where technology seamlessly integrates with business operations, unlocking unprecedented potential and creating opportunities for growth and innovation. Our vision extends beyond building software – we aspire to shape the future of digital business transformation.
            </p>

            <p>
              We aim to become a globally recognized leader in software development, known for our innovative approaches, technical excellence, and unwavering commitment to client success. Our goal is to be the first choice for businesses seeking reliable, scalable, and cutting-edge technology solutions that drive measurable results.
            </p>

            <p>
              Looking ahead, we envision <span className="font-semibold text-navy">Novaa Tech</span> as a company that not only adapts to technological advancements but actively contributes to shaping industry standards. We're committed to staying at the forefront of emerging technologies like artificial intelligence, machine learning, blockchain, and cloud computing, ensuring our clients always have access to the most advanced solutions available.
            </p>

            <p>
              Our vision encompasses building a global community of satisfied clients, talented professionals, and strategic partners who share our passion for excellence. We believe in creating sustainable growth – for our clients, our team, and our company – while maintaining the highest standards of <span className="font-semibold text-navy">integrity, transparency, and professional ethics</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Why Choose <span className="text-cyan-600">Novaa Tech</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-gray-200 bg-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon size={24} className="text-cyan-600 group-hover:text-blue-900 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-600 group-hover:text-cyan-100 text-sm leading-relaxed transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Our Core <span className="text-navy">Values</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-gray-200 bg-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-cyan-100 group-hover:bg-white rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon size={28} className="text-cyan-600 group-hover:text-blue-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 group-hover:text-cyan-100 text-sm leading-relaxed transition-colors duration-300">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Industries We <span className="text-navy">Serve</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-3"></div>
          <p className="text-gray-600 mb-8">
            Our expertise spans across diverse industries, delivering tailored solutions that address sector-specific challenges
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div
                  key={index}
                  className="group p-5 rounded-xl border border-gray-200 bg-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-900 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-cyan-100 group-hover:bg-white rounded-full flex items-center justify-center mb-2 transition-colors duration-300">
                    <Icon size={24} className="text-cyan-600 group-hover:text-blue-900 transition-colors duration-300" />
                  </div>
                  <p className="font-semibold text-gray-900 group-hover:text-white text-sm transition-colors duration-300">{industry.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-cyan-500 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-bold mb-2">7+</p>
              <p className="text-cyan-100 font-medium">Years Experience</p>
            </div>
            <div className="text-center hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-bold mb-2">40+</p>
              <p className="text-cyan-100 font-medium">Happy Clients</p>
            </div>
            <div className="text-center hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-bold mb-2">200+</p>
              <p className="text-cyan-100 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
              <p className="text-cyan-100 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Frequently Asked <span className="text-navy">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-600 mb-8"></div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                  className={`w-full p-5 rounded-lg font-semibold text-left transition-all duration-300 flex justify-between items-center ${
                    expandedFAQ === index
                      ? "bg-gradient-to-r from-cyan-500 to-blue-900 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-white border border-gray-200 text-gray-900 hover:border-cyan-500"
                  }`}
                >
                  <span className="text-sm md:text-base pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFAQ === index && (
                  <div className="p-5 bg-white border border-t-0 border-gray-200 rounded-b-lg text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  
  )
}