'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AcademicHub.md</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/cursuri" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Cursuri
            </Link>
            <Link 
              href="/profesori" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Profesori
            </Link>
            <Link 
              href="/simulare" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Simulare
            </Link>
            <Link 
              href="/rezolvari" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Rezolvari
            </Link>
            <Link 
              href="/despre" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Despre Noi
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Phone and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+37368217739" 
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+373 68 217 739</span>
            </a>
            <a 
              href="https://wa.me/37368217739" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                href="/cursuri" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursuri
              </Link>
              <Link 
                href="/profesori" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Profesori
              </Link>
              <Link 
                href="/simulare" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Simulare
              </Link>
              <Link 
                href="/rezolvari" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rezolvari
              </Link>
              <Link 
                href="/despre" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Despre Noi
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t">
                <a 
                  href="tel:+37368217739" 
                  className="flex items-center space-x-2 px-3 py-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+373 68 217 739</span>
                </a>
                <a 
                  href="https://wa.me/37368217739" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
