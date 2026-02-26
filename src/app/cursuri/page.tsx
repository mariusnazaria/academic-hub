'use client';

import { useState } from 'react';
import { BookOpen, Users, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function Cursuri() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const courses = [
    {
      title: "Clasa 9 Nivel A",
      description: "Curs intensiv de matematică pentru clasa 9, nivel introducere",
      price: "2750 MDL",
      duration: "6 săptămâni, 11 lecții",
      schedule: "Luni-Vineri, 15:00-20:00",
      maxStudents: 5,
      subjects: ["Algebră", "Geometrie"],
      features: [
        "Materiale didactice complete",
        "Exerciții practice",
        "Teste de evaluare",
        "Suport online",
        "Certificat de finalizare"
      ]
    },
    {
      title: "Curs de pregătire pentru BAC",
      description: "Curs complet de pregătire pentru examenul de bacalaureat",
      price: "9900 MDL",
      duration: "4 luni, 40 lecții",
      schedule: "Luni-Vineri, 15:00-20:00",
      maxStudents: 5,
      subjects: ["Algebră", "Geometrie", "Analiză", "Probabilități"],
      features: [
        "Materiale didactice complete",
        "Exerciții practice avansate",
        "Teste de evaluare",
        "Suport online 24/7",
        "Simulări de examen",
        "Certificat de finalizare"
      ]
    },
    
  ];

  const handleEnroll = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4BAD01] to-[#3E8F01] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cursuri de Matematică
          </h1>
          <p className="text-xl text-[#DEF5CC] max-w-3xl mx-auto">
            Programe personalizate pentru clasele 9 și 12, cu profesori experimentați 
            și materiale didactice complete. Rezultate garantate!
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alege Cursul Potrivit Pentru Tine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Toate cursurile includ materiale didactice, exerciții practice și suport online. 
              Grupurile sunt mici pentru atenție personalizată.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
                onEnroll={handleEnroll}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce Include Fiecare Curs
            </h2>
            <p className="text-xl text-gray-600">
              Servicii complete pentru o experiență de învățare optimă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Materiale Complete</h3>
              <p className="text-gray-600">
                Manuale, culegeri de exerciții, teste de evaluare și resurse online
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Grupuri Mici</h3>
              <p className="text-gray-600">
                Maximum 3-5 elevi per grup pentru atenție personalizată
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Suport Online</h3>
              <p className="text-gray-600">
                Acces la materiale și suport online în orice moment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4BAD01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gata să Începi?
          </h2>
                      <p className="text-xl text-[#DEF5CC] mb-8">
            Înscrie-te acum la cursul potrivit pentru tine și fă primul pas spre succesul la matematică!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleEnroll('Clasa 9 A')}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-50 transition-colors"
            >
              Înscrie-te Acum
            </button>
            <a 
              href="viber://chat?number=37361221666" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-[#6D28D9] transition-colors"
            >
              Contactează-ne pe Viber
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        courseTitle={selectedCourse}
      />
    </div>
  );
}
