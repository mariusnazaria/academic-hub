'use client';

import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    subiect: '',
    mesaj: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nume.trim()) {
      newErrors.nume = 'Numele este obligatoriu';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid';
    }
    
    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonul este obligatoriu';
    } else if (!/^[\+]?[0-9\s\-\(\)]{8,}$/.test(formData.telefon)) {
      newErrors.telefon = 'Telefonul nu este valid';
    }

    if (!formData.subiect.trim()) {
      newErrors.subiect = 'Subiectul este obligatoriu';
    }

    if (!formData.mesaj.trim()) {
      newErrors.mesaj = 'Mesajul este obligatoriu';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ nume: '', email: '', telefon: '', subiect: '', mesaj: '' });
        }, 5000);
      } else {
        setErrors({ submit: result.error || 'A apărut o eroare la trimiterea mesajului.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'A apărut o eroare. Vă rugăm să încercați din nou.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+373 68 217 739",
      link: "tel:+37368217739",
      description: "Luni - Vineri: 9:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Email",
      value: "academichubmd@gmail.com",
      link: "mailto:academichubmd@gmail.com",
      description: "Răspundem în 24 de ore"
    },
    {
      icon: MapPin,
      title: "Adresa",
      value: "Sciusev 31, Chișinău",
      link: "#",
      description: "Centrul AcademicHub.md"
    },
    {
      icon: Clock,
      title: "Program",
      value: "Luni - Vineri",
      link: "#",
      description: "9:00 - 18:00"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4BAD01] to-[#3E8F01] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactează-ne
          </h1>
          <p className="text-xl text-[#DEF5CC] max-w-3xl mx-auto">
            Suntem aici să te ajutăm! Contactează-ne pentru orice întrebări 
            despre cursurile noastre sau pentru a programa o consultație.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Informații de Contact
            </h2>
            <p className="text-xl text-gray-600">
              Suntem disponibili prin multiple canale de comunicare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-[#4BAD01]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <a 
                  href={info.link}
                  className="text-[#4BAD01] hover:text-[#3E8F01] font-medium block mb-2"
                >
                  {info.value}
                </a>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trimite-ne un Mesaj
            </h2>
            <p className="text-xl text-gray-600">
              Completează formularul de mai jos și te vom contacta în curând
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Mesajul a fost trimis cu succes!
              </h3>
              <p className="text-green-700 mb-4">
                Vă mulțumim pentru mesaj! Vă vom contacta în curând pentru a răspunde 
                la întrebările voastre.
              </p>
              <p className="text-sm text-green-600">
                Verificați email-ul pentru confirmare.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Formular de Contact
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume și Prenume *
                    </label>
                    <input
                      type="text"
                      id="nume"
                      name="nume"
                      value={formData.nume}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58CC01] ${
                        errors.nume ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Introduceți numele complet"
                    />
                    {errors.nume && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.nume}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58CC01] ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="exemplu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58CC01] ${
                        errors.telefon ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+373 68 217 739"
                    />
                    {errors.telefon && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.telefon}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subiect" className="block text-sm font-medium text-gray-700 mb-2">
                      Subiect *
                    </label>
                    <input
                      type="text"
                      id="subiect"
                      name="subiect"
                      value={formData.subiect}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58CC01] ${
                        errors.subiect ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Subiectul mesajului"
                    />
                    {errors.subiect && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subiect}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="mesaj"
                      name="mesaj"
                      rows={4}
                      value={formData.mesaj}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58CC01] ${
                        errors.mesaj ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Scrieți mesajul vostru aici..."
                    />
                    {errors.mesaj && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.mesaj}
                      </p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-600 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.submit}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}
                  </Button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    De ce să ne Contactezi?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-green-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Consultație Gratuită</h4>
                        <p className="text-gray-600 text-sm">
                          Oferim o consultație gratuită pentru a evalua nevoile tale și a crea un plan personalizat.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-green-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Răspuns Rapid</h4>
                        <p className="text-gray-600 text-sm">
                          Răspundem la toate mesajele în maxim 24 de ore în zilele lucrătoare.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-green-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Suport Personalizat</h4>
                        <p className="text-gray-600 text-sm">
                          Fiecare elev primește atenția personalizată și suportul necesar pentru succes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F3E8FF] rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Contactare pe Viber
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Pentru răspunsuri rapide, poți să ne contactezi direct pe Viber.
                  </p>
                  <a 
                    href="viber://chat?number=37368217739" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Viber
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unde Ne Găsești
            </h2>
            <p className="text-xl text-gray-600">
              Centrul AcademicHub.md din Chișinău
            </p>
          </div>

          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Harta va fi afișată aici</p>
              <p className="text-sm">Centrul AcademicHub.md, Sciusev 31, Chișinău</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
