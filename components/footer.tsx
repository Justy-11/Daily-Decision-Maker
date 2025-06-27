import { Heart, Github, X, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/justy0011" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/justy__11" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/Justy-11" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Made with Love */}
          <div>
            <h3 className="font-bold text-white mb-4">About This Site</h3>
            <p className="text-white/80 flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-400" /> for indecisive people everywhere
            </p>
            <p className="text-white/60 text-sm mt-2">© 2025 Daily Decision Maker. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
