'use client';

import { 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  MessageCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function DespreNoi() {
  const values = [
    {
      icon: Target,
      title: "Excelență Academică",
      description: "Ne dedicăm să oferim cea mai înaltă calitate în predarea matematicii, cu metode moderne și eficiente."
    },
    {
      icon: Users,
      title: "Elevii Noștri Sunt Prioritatea",
      description: "Fiecare elev este unic și merită atenția personalizată pentru a-și atinge potențialul maxim."
    },
    {
      icon: Award,
      title: "Rezultate Garantate",
      description: "Metodele noastre dovedite au ajutat sute de elevi să obțină rezultate excepționale la examene."
    },
    {
      icon: BookOpen,
      title: "Învățare Continuă",
      description: "Profesorii noștri se dezvoltă constant, adoptând cele mai noi metodologii educaționale."
    }
  ];

  const methodology = [
    {
      title: "Evaluare Inițială",
      description: "Fiecare elev este evaluat pentru a determina nivelul actual și a crea un plan personalizat de învățare."
    },
    {
      title: "Predare Interactivă",
      description: "Utilizăm metode interactive care fac matematica accesibilă și plăcută pentru toți elevii."
    },
    {
      title: "Exerciții Practice",
      description: "Oferim sute de exerciții practice pentru a consolida cunoștințele și a dezvolta abilitățile de rezolvare."
    },
    {
      title: "Feedback Personalizat",
      description: "Fiecare elev primește feedback detaliat și personalizat pentru a-și îmbunătăți performanța."
    },
    {
      title: "Teste de Evaluare",
      description: "Conducem teste regulate pentru a monitoriza progresul și a ajusta strategia de predare."
    },
    {
      title: "Suport Continuu",
      description: "Oferim suport online și offline pentru a răspunde întrebărilor și a clarifica conceptele."
    }
  ];

  const achievements = [
    {
      number: "2700+",
      label: "Elevi Pregătiți cu Succes"
    },
    {
      number: "95%",
      label: "Rata de Succes la Examene"
    },
    {
      number: "4+",
      label: "Ani de Experiență"
    },
    {
      number: "10000+",
      label: "Ore de Predare"
    },
    {
      number: "27+",
      label: "Materiale Didactice"
    },
    {
      number: "24/7",
      label: "Suport Online"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4BAD01] to-[#3E8F01] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Despre Noi
          </h1>
          <p className="text-xl text-[#DEF5CC] max-w-3xl mx-auto">
            AcademicHub.md este centrul de excelență pentru pregătirea la matematică din Moldova, 
            dedicat transformării vieții elevilor prin educație de calitate.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Misiunea Noastră
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                La AcademicHub.md, misiunea noastră este să democratizăm accesul la educația 
                matematică de calitate și să ajutăm fiecare elev să-și atingă potențialul academic maxim.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Credem că matematica este fundamentul pentru succesul academic și profesional, 
                și ne dedicăm să facem această materie accesibilă, plăcută și eficientă pentru toți elevii.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Prin metode inovatoare de predare, profesori experimentați și o abordare personalizată, 
                transformăm dificultățile în oportunități și transformăm visele academice în realitate.
              </p>
            </div>
            <div className="bg-[#EEFAE6] rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#58CC01] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Viziunea Noastră</h3>
                <p className="text-gray-700 leading-relaxed">
                  Să devenim centrul de referință pentru educația matematică din Moldova, 
                  recunoscut pentru inovație, calitate și rezultate excepționale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600">
              Principiile care ne ghidează în tot ce facem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#DEF5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#4BAD01]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Metodologia Noastră
            </h2>
            <p className="text-xl text-gray-600">
              Abordarea sistematică care asigură succesul elevilor noștri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-[#58CC01] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Realizările Noastre
            </h2>
            <p className="text-xl text-gray-600">
              Cifrele care demonstrează impactul nostru în educație
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#4BAD01] mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-600 leading-tight">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-20 bg-[#4BAD01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vrei să Afli Mai Multe?
          </h2>
          <p className="text-xl text-[#DEF5CC] mb-8">
            Contactează-ne pentru a afla cum putem să te ajutăm să-ți atingi obiectivele academice!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="text-lg px-8 py-4">
              Contactează-ne
            </Button>
            <a 
              href="viber://chat?number=37368217739" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#6D28D9] rounded-lg font-medium text-lg hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Viber
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
