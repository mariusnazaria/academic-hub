'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GraduationCap, Award, Clock, Star, Mail, Phone, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Profesori() {
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);

  const teachers = [
    {
      id: 'catalin-botezat',
      name: 'Catalin Botezat',
      title: 'Profesor',
      experience: '12 ani de experiență',
      education: 'Universitatea de Stat din Moldova, Facultatea de Matematică',
      subjects: ['Algebră', 'Geometrie', 'Analiză Matematică', 'Trigonometrie'],
      specializations: [
        'Pregătire pentru examene de admitere',
        'Metodologii de predare moderne',
        'Dezvoltarea gândirii logice',
        'Rezolvarea problemelor complexe'
      ],
      achievements: [
        'Peste 2000 de elevi pregătiți cu succes',
        'Rata de succes de 95% la examene',
        'Autor de materiale didactice',
        'Certificat în pedagogie modernă'
      ],
      bio: 'Catalin Botezat este un profesor dedicat cu o pasiune deosebită pentru matematică. Metodele sale inovatoare de predare au ajutat sute de elevi să înțeleagă concepte complexe și să obțină rezultate excepționale la examene.',
      photo: '/Catalin_Botezat.jpeg',
      contact: {
        email: 'catalin.botezat@academichub.md',
        phone: '+373 68 217 739'
      }
    },
    {
      id: 'dragos-bahov',
      name: 'Dragos Bahov',
      title: 'Profesor',
      experience: '8 ani de experiență',
      education: 'Universitatea Politehnică din Moldova, Facultatea de Matematică',
      subjects: ['Analiză Matematică', 'Algebră Liniară', 'Geometrie Analitică', 'Probabilități'],
      specializations: [
        'Matematică pentru clasele superioare',
        'Pregătire pentru olimpiade',
        'Dezvoltarea inteligenței matematice',
        'Metode de rezolvare rapide'
      ],
      achievements: [
        'Peste 300 de elevi pregătiți',
        'Participare la olimpiade naționale',
        'Dezvoltator de metode de predare',
        'Mentor pentru profesori tineri'
      ],
      bio: 'Dragos Bahov se specializează în matematică avansată și are o abordare sistematică în predare. El ajută elevii să dezvolde gândirea logică și să rezolve probleme complexe cu încredere.',
      photo: '/placeholder-teacher.jpg',
      contact: {
        email: 'dragos.bahov@academichub.md',
        phone: '+373 68 217 739'
      }
    },
    {
      id: 'ovidiu-harunjen',
      name: 'Ovidiu Harunjen',
      title: 'Profesor',
      experience: '6 ani de experiență',
      education: 'Universitatea de Stat din Moldova, Facultatea de Matematică',
      subjects: ['Algebră de bază', 'Geometrie plană', 'Aritmetică', 'Logica matematică'],
      specializations: [
        'Predarea matematicii pentru începători',
        'Dezvoltarea interesului pentru matematică',
        'Metode interactive de predare',
        'Suport individual pentru elevi'
      ],
      achievements: [
        'Peste 200 de elevi îndrumați',
        'Specialist în predarea pentru clasele mici',
        'Dezvoltator de jocuri educaționale',
        'Certificat în pedagogie specială'
      ],
      bio: 'Ovidiu Harunjen are o abordare prietenoasă și răbdătoare în predare, fiind specializat în lucrul cu elevii care au dificultăți în înțelegerea matematicii. Metodele sale interactive fac matematica accesibilă și plăcută.',
      photo: '/placeholder-teacher.jpg',
      contact: {
        email: 'ovidiu.harunjen@academichub.md',
        phone: '+373 68 217 739'
      }
    }
  ];

  const toggleTeacher = (teacherId: string) => {
    setSelectedTeacher(selectedTeacher === teacherId ? null : teacherId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Profesorii Noștri
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Echipa de profesori experimentați care transformă matematica 
            într-o experiență de învățare plăcută și eficientă
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cunoaște Echipa Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesori dedicați cu experiență vastă în predarea matematicii 
              și o rată de succes impresionantă
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Teacher Photo */}
                <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                  {teacher.photo && teacher.photo !== '/placeholder-teacher.jpg' ? (
                    <Image 
                      src={teacher.photo} 
                      alt={`${teacher.name} - ${teacher.title}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold">{teacher.name}</h3>
                      <p className="text-green-100">{teacher.title}</p>
                    </div>
                  )}
                </div>

                {/* Teacher Info */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{teacher.experience}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Materii predate:</h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specializări:</h4>
                    <ul className="space-y-1">
                      {teacher.specializations.slice(0, 2).map((spec, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <Star className="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => toggleTeacher(teacher.id)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors font-medium"
                    >
                      {selectedTeacher === teacher.id ? 'Ascunde Detalii' : 'Vezi Detalii Complete'}
                    </button>
                    
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:${teacher.contact.email}`}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors text-center text-sm font-medium flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </a>
                      <a
                        href={`tel:${teacher.contact.phone}`}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors text-center text-sm font-medium flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-1" />
                        Telefon
                      </a>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedTeacher === teacher.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Biografie:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Educație:</h4>
                        <p className="text-gray-600 text-sm">{teacher.education}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Realizări:</h4>
                        <ul className="space-y-1">
                          {teacher.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <Award className="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rezultatele Vorbesc de la Sine
            </h2>
            <p className="text-xl text-gray-600">
              Statistici impresionante care demonstrează eficiența metodelor noastre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Elevi Pregătiți</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Rata de Succes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Ani de Experiență</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Ore de Predare</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vrei să Înveți cu Profesorii Noștri?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Înscrie-te acum la cursurile noastre și beneficiezi de expertiza 
            profesorilor cu cea mai mare experiență din Moldova!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/cursuri" variant="secondary" size="lg" className="text-lg px-8 py-4">
              Vezi Cursurile
            </Button>
            <a 
              href="https://wa.me/37368217739" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-medium text-lg hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactează-ne pe WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
