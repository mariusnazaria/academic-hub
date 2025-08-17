'use client';

import { useState } from 'react';
import { BookOpen, Download, Eye, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Rezolvari() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = [
    { id: 'all', name: 'Toate Materiile' },
    { id: 'algebra', name: 'Algebră' },
    { id: 'geometrie', name: 'Geometrie' },
    { id: 'trigonometrie', name: 'Trigonometrie' },
    { id: 'analiza', name: 'Analiză Matematică' },
    { id: 'probabilitati', name: 'Probabilități' }
  ];

  const solutions = [
    {
      id: 1,
      title: 'Rezolvarea ecuațiilor de gradul II',
      subject: 'algebra',
      difficulty: 'Mediu',
      class: 'Clasa 9',
      description: 'Metode complete de rezolvare a ecuațiilor de gradul II cu exemple practice',
      topics: ['Ecuații de gradul II', 'Formulele lui Viète', 'Discriminantul'],
      downloadCount: 245,
      viewCount: 1234
    },
    {
      id: 2,
      title: 'Probleme de geometrie plană',
      subject: 'geometrie',
      difficulty: 'Avansat',
      class: 'Clasa 9-12',
      description: 'Colecție de probleme de geometrie plană cu rezolvări detaliate',
      topics: ['Triunghiuri', 'Cercuri', 'Poligoane', 'Arii și perimetre'],
      downloadCount: 189,
      viewCount: 987
    },
    {
      id: 3,
      title: 'Identități trigonometrice',
      subject: 'trigonometrie',
      difficulty: 'Avansat',
      class: 'Clasa 10-12',
      description: 'Demonstrarea identităților trigonometrice fundamentale',
      topics: ['Identități fundamentale', 'Formule de adunare', 'Formule de dublare'],
      downloadCount: 156,
      viewCount: 756
    },
    {
      id: 4,
      title: 'Derivate și aplicații',
      subject: 'analiza',
      difficulty: 'Avansat',
      class: 'Clasa 11-12',
      description: 'Calculul derivatelor și aplicațiile lor în probleme practice',
      topics: ['Reguli de derivare', 'Derivate compuse', 'Aplicații geometrice'],
      downloadCount: 203,
      viewCount: 1123
    },
    {
      id: 5,
      title: 'Probleme de combinatorică',
      subject: 'probabilitati',
      difficulty: 'Mediu',
      class: 'Clasa 9-12',
      description: 'Rezolvarea problemelor de combinatorică cu metode sistematice',
      topics: ['Permutări', 'Combinații', 'Aranjamente', 'Principiul multiplicativ'],
      downloadCount: 134,
      viewCount: 678
    },
    {
      id: 6,
      title: 'Inegalități algebrice',
      subject: 'algebra',
      difficulty: 'Avansat',
      class: 'Clasa 9-12',
      description: 'Metode de rezolvare a inegalităților algebrice complexe',
      topics: ['Inegalități de gradul I', 'Inegalități de gradul II', 'Metoda intervalelor'],
      downloadCount: 178,
      viewCount: 892
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || solution.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rezolvari ale Culegerii de Probleme
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Găsește soluții detaliate pentru problemele de matematică din culegerea AcademicHub. 
            Rezolvări pas cu pas pentru toate nivelurile.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Caută rezolvări..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {subjects.map(subject => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rezolvări Disponibile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredSolutions.length} rezolvări găsite pentru {selectedSubject === 'all' ? 'toate materiile' : subjects.find(s => s.id === selectedSubject)?.name.toLowerCase()}
            </p>
          </div>

          {filteredSolutions.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Nu s-au găsit rezolvări</h3>
              <p className="text-gray-500">Încearcă să modifici criteriile de căutare</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <div key={solution.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        solution.difficulty === 'Avansat' ? 'bg-red-100 text-red-800' :
                        solution.difficulty === 'Mediu' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {solution.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">{solution.class}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {solution.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Subiecte acoperite:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.topics.slice(0, 3).map((topic, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {topic}
                          </span>
                        ))}
                        {solution.topics.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{solution.topics.length - 3} mai multe
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {solution.viewCount} vizualizări
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {solution.downloadCount} descărcări
                      </span>
                    </div>
                    
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Descarcă Rezolvarea
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ai nevoie de ajutor cu o problemă specifică?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contactează-ne pentru a primi rezolvări personalizate sau pentru a te înscrie la cursurile noastre!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-medium text-lg hover:bg-gray-50 transition-colors"
            >
              Contactează-ne
            </a>
            <a
              href="/cursuri"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Vezi Cursurile
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
