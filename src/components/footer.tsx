import Link from "next/link"
import { Mail, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                N
              </div>
              <span className="font-bold">Novaa Tech</span>
            </div>
            <p className="text-cyan-100 text-sm">Our Tech Solutions Drive Your Success.</p>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up stagger-1">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-cyan-100">
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up stagger-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-cyan-100">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up stagger-3">
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-cyan-100 text-sm mb-4 flex items-center gap-2">
              <Mail size={16} />
              hello@novaatech.com
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-cyan-100 hover:text-cyan-300 transition-colors hover:scale-110 transform duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-cyan-100 hover:text-cyan-300 transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-cyan-100 hover:text-cyan-300 transition-colors hover:scale-110 transform duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cyan-500/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyan-100 text-sm">&copy; {currentYear} Novaa Tech. All rights reserved</p>
          <div className="flex gap-6 text-cyan-100 text-sm mt-4 md:mt-0">
            <Link href="#" className="hover:text-cyan-300 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-cyan-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
