'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp, 
  MessageCircle,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Ce nivel de pregătire am nevoie pentru a începe cursurile?",
      answer: "Cursurile noastre sunt adaptate pentru toate nivelurile. Evaluăm cunoștințele inițiale ale fiecărui elev și îl încadrăm în grupul potrivit."
    },
    {
      question: "Câte elevi sunt într-un grup?",
      answer: "Grupurile sunt mici, cu maximum 3-5 elevi, pentru a asigura atenția personalizată a profesorului și o experiență de învățare optimă."
    },
    {
      question: "Oferiți materiale didactice?",
      answer: "Da, toate cursurile includ materiale didactice complete, exerciții practice și teste de evaluare. Materialele sunt actualizate anual."
    },
    {
      question: "Care este rata de succes a elevilor voștri?",
      answer: "Elevii noștri au o rată de succes de peste 90% la examenele de matematică. Rezultatele vorbesc de la sine."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EEFAE6] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Pregătire la{' '}
                <span className="text-[#4BAD01]">Matematică</span>
                <br />
                de Calitate
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Învață cu profesori experimentați în grupuri mici. 
                Peste 2000 de elevi au reușit cu noi. 
                Rezultate garantate!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/cursuri" size="lg" className="text-lg px-8 py-4">
                  Înscrie-te Acum
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a 
                  href="viber://chat?number=37368217739" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#6D28D9] text-[#6D28D9] rounded-lg font-medium text-lg hover:bg-[#F3E8FF] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Viber
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#58CC01] rounded-2xl p-8 shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">A+</div>
                  <div className="text-xl font-medium">AcademicHub.md</div>
                  <div className="text-[#DEF5CC] mt-2">Centru de Excelență</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-[#58CC01]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              De ce AcademicHub.md?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim o experiență de învățare superioară cu rezultate măsurabile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#4BAD01]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Grupuri Mici</h3>
              <p className="text-gray-600">Maximum 3-5 elevi per grup pentru atenție personalizată</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#4BAD01]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sute de Exerciții</h3>
              <p className="text-gray-600">Materiale practice complete pentru fiecare lecție</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#4BAD01]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Profesori Experimentați</h3>
              <p className="text-gray-600">Echipa noastră are peste 4 ani de experiență</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#4BAD01]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">90%+ Rata de Succes</h3>
              <p className="text-gray-600">Media noastră la bac este e=2,17, comparabilă cu media liceelor de top din Moldova</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce Oferim
            </h2>
            <p className="text-xl text-gray-600">
              Servicii complete pentru pregătirea la matematică
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/cursuri" className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col h-full">
                <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-[#4BAD01]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cursuri</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Cursuri specializate pentru clasele 9 și 12, cu programe personalizate 
                  și materiale didactice complete.
                </p>
                <div className="flex items-center text-[#4BAD01] font-medium group-hover:text-[#3E8F01] mt-auto">
                  Vezi cursurile
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/profesori" className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col h-full">
                <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[#4BAD01]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Profesori</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Cunoaște echipa noastră de profesori experimentați, 
                  specializați în pregătirea la matematică.
                </p>
                <div className="flex items-center text-[#4BAD01] font-medium group-hover:text-[#3E8F01] mt-auto">
                  Cunoaște profesorii
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/simulare" className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col h-full">
                <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-[#4BAD01]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Simulare</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Simulări de examen în condiții reale pentru a-ți testa 
                  cunoștințele și a te familiariza cu formatul.
                </p>
                <div className="flex items-center text-[#4BAD01] font-medium group-hover:text-[#3E8F01] mt-auto">
                  Înscrie-te la simulare
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link href="/rezolvari" className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col h-full">
                <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-[#4BAD01]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rezolvări</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Rezolvări ale culegerii de probleme AcademicHub.
                </p>
                <div className="flex items-center text-[#4BAD01] font-medium group-hover:text-[#3E8F01] mt-auto">
                  Vezi rezolvările
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce Spun Elevii Noștri
            </h2>
            <p className="text-xl text-gray-600">
              Rezultatele vorbesc de la sine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
                              <p className="text-gray-700 mb-4">
                  &ldquo;Datorită cursurilor de la AcademicHub am reușit să obțin 9 la bac la matematică. Domn Ovidiu explică excelent!&rdquo;
                </p>
              <div className="font-medium text-gray-900">Maria Rusu</div>
              <div className="text-sm text-gray-600">Clasa 12, Chișinău</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
                              <p className="text-gray-700 mb-4">
                  &ldquo;Metodele de predare sunt foarte eficiente. În sfârșit am înțeles matematica!&rdquo;
                </p>
              <div className="font-medium text-gray-900">Alexandru Negru</div>
              <div className="text-sm text-gray-600">Clasa 9, Chișinău</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
                              <p className="text-gray-700 mb-4">
                  &ldquo;Cartea de geometrie m-a ajutat foarte mult! Nu m-a aștempat vreodata să o învăț&rdquo;
                </p>
              <div className="font-medium text-gray-900">Elena Dumitrache</div>
              <div className="text-sm text-gray-600">Clasa 12, Ialoveni</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-xl text-gray-600">
              Răspunsuri la întrebările care ne sunt adresate cel mai des
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#58CC01]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
            Înscrie-te acum la cursurile noastre și fă primul pas spre succesul la matematică!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/cursuri" variant="secondary" size="lg" className="text-lg px-8 py-4">
              Vezi Cursurile
            </Button>
            <a 
              href="viber://chat?number=37368217739" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#6D28D9] rounded-lg font-medium text-lg hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactează-ne pe Viber
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
