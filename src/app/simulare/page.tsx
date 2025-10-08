'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  CheckCircle, 
  AlertCircle,
  BookOpen,
  FileText,
  MessageCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Simulare() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    clasa: '',
    data: '',
    locatie: ''
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

    if (!formData.clasa) {
      newErrors.clasa = 'Selectați clasa';
    }

    if (!formData.data) {
      newErrors.data = 'Selectați data';
    }

    if (!formData.locatie) {
      newErrors.locatie = 'Selectați locația';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/simulare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ nume: '', email: '', telefon: '', clasa: '', data: '', locatie: '' });
        }, 5000);
      } else {
        throw new Error('Eroare la trimiterea formularului');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'A apărut o eroare. Vă rugăm să încercați din nou.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const simulationDates = [
    { date: '2024-10-15', time: '16:00', location: 'Centrul AcademicHub.md, Chișinău' },
    { date: '2024-10-22', time: '16:00', location: 'Centrul AcademicHub.md, Chișinău' },
    { date: '2024-11-05', time: '16:00', location: 'Centrul AcademicHub.md, Chișinău' },
    { date: '2024-11-12', time: '16:00', location: 'Centrul AcademicHub.md, Chișinău' },
    { date: '2024-12-03', time: '16:00', location: 'Centrul AcademicHub.md, Chișinău' },
    { date: '2024-12-10', time: '16:00', location: 'Centrul AcademicHub.md, Chișinău' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4BAD01] to-[#3E8F01] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simulări de Examen
          </h1>
          <p className="text-xl text-[#DEF5CC] max-w-3xl mx-auto">
            Testează-ți cunoștințele în condiții reale de examen. 
            Simulări complete cu evaluare personalizată și feedback detaliat.
          </p>
        </div>
      </section>

      {/* What is Simulation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ce Este O Simulare de Examen?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Simulările de examen sunt teste complete care reproduc condițiile reale 
                ale examenelor de matematică. Ele te ajută să:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Te familiarizezi cu formatul și structura examenului</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Îți testezi cunoștințele în condiții de stres</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Identifici zonele care necesită mai multă atenție</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Îți îmbunătățești tehnica de rezolvare</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Simulare Completă</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Durată: 2 ore</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Toate materiile incluse</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Evaluare personalizată</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Feedback detaliat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Dates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Date Disponibile
            </h2>
            <p className="text-xl text-gray-600">
              Alege data care ți se potrivește cel mai bine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {simulationDates.map((sim, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {new Date(sim.date).toLocaleDateString('ro-RO', { 
                      day: 'numeric', 
                      month: 'long' 
                    })}
                  </div>
                  <div className="text-gray-600 mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      {sim.time}
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Chișinău
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Locuri disponibile: 15
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Înscrie-te la Simulare
            </h2>
            <p className="text-xl text-gray-600">
              Completează formularul de mai jos pentru a-ți rezerva locul
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Înscrierea a fost trimisă cu succes!
              </h3>
              <p className="text-green-700 mb-4">
                Vă vom contacta în curând pentru confirmarea detaliilor și pentru a vă trimite 
                informațiile complete despre simulare.
              </p>
              <p className="text-sm text-green-600">
                Verificați email-ul pentru confirmare și instrucțiuni suplimentare.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
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
                  <label htmlFor="clasa" className="block text-sm font-medium text-gray-700 mb-2">
                    Clasa *
                  </label>
                  <select
                    id="clasa"
                    name="clasa"
                    value={formData.clasa}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.clasa ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selectați clasa</option>
                    <option value="9">Clasa 9</option>
                    <option value="12">Clasa 12</option>
                  </select>
                  {errors.clasa && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.clasa}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
                    Data Simulării *
                  </label>
                  <select
                    id="data"
                    name="data"
                    value={formData.data}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.data ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selectați data</option>
                    {simulationDates.map((sim, index) => (
                      <option key={index} value={sim.date}>
                        {new Date(sim.date).toLocaleDateString('ro-RO', { 
                          day: 'numeric', 
                          month: 'long',
                          year: 'numeric'
                        })} - {sim.time}
                      </option>
                    ))}
                  </select>
                  {errors.data && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.data}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="locatie" className="block text-sm font-medium text-gray-700 mb-2">
                    Locația *
                  </label>
                  <select
                    id="locatie"
                    name="locatie"
                    value={formData.locatie}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.locatie ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selectați locația</option>
                    <option value="chisinau">Centrul AcademicHub.md, Chișinău</option>
                  </select>
                  {errors.locatie && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.locatie}
                    </p>
                  )}
                </div>
              </div>

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-600 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.submit}
                  </p>
                </div>
              )}

              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto px-8 py-4 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Se trimite...' : 'Trimite Înscrierea'}
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Prin trimiterea acestui formular, sunteți de acord cu{' '}
                <a href="/termeni" className="text-green-600 hover:underline">
                  termenii și condițiile
                </a>{' '}
                noastre.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4BAD01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ai întrebări despre Simulări?
          </h2>
                      <p className="text-xl text-[#DEF5CC] mb-8">
            Contactează-ne pentru mai multe informații sau pentru a programa o simulare personalizată!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="viber://chat?number=37368217739" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#6D28D9] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Viber
            </a>
            <a 
              href="tel:+37368217739"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Telefon
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
