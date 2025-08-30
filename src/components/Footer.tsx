import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#58CC01] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AcademicHub.md</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Centru de pregătire la matematică cu profesori experimentați. 
              Oferim cursuri de calitate pentru clasele 9 și 12, simulări de examen 
              și materiale didactice complete.
            </p>
            <div className="flex space-x-4">
                          <a 
              href="https://invite.viber.com/?g=37368217739" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white p-2 rounded-lg transition-colors" 
              aria-label="Viber"
            >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Linkuri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursuri" className="text-gray-300 hover:text-white transition-colors">
                  Cursuri
                </Link>
              </li>
              <li>
                <Link href="/profesori" className="text-gray-300 hover:text-white transition-colors">
                  Profesori
                </Link>
              </li>
              <li>
                <Link href="/simulare" className="text-gray-300 hover:text-white transition-colors">
                  Simulare
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-gray-300 hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+37368217739" className="hover:text-white transition-colors">
                  +373 68 217 739
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:academichubmd@gmail.com" className="hover:text-white transition-colors">
                  academichubmd@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Sciusev 31, Chișinău</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AcademicHub.md. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/termeni" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termeni și Condiții
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
