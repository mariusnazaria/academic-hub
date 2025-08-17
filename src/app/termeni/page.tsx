'use client';

import { 
  Shield, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Users,
  BookOpen,
  Clock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Termeni() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Termeni și Condiții
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Condițiile de utilizare a serviciilor AcademicHub.md
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  Termeni Generale
                </h2>
                <p className="text-gray-600 mb-4">
                  Prin accesarea și utilizarea serviciilor AcademicHub.md, sunteți de acord să respectați 
                  acești termeni și condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu 
                  utilizați serviciile noastre.
                </p>
                <p className="text-gray-600">
                  AcademicHub.md se rezervă dreptul de a modifica acești termeni în orice moment. 
                  Modificările vor fi comunicate prin email sau prin notificare pe site.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-green-500 mr-3" />
                  Înscrierea și Participarea la Cursuri
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Eligibilitate</h4>
                      <p className="text-gray-600 text-sm">
                        Cursurile sunt deschise elevilor din clasele 9 și 12. Vârsta minimă este de 14 ani.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Înscrierea</h4>
                      <p className="text-gray-600 text-sm">
                        Înscrierea se face prin completarea formularului online sau prin contact direct. 
                        Este necesară furnizarea informațiilor corecte și complete.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Confirmarea</h4>
                      <p className="text-gray-600 text-sm">
                        Înscrierea este confirmată după verificarea informațiilor și confirmarea plății.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 text-green-500 mr-3" />
                  Serviciile Oferite
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cursuri de Matematică</h4>
                      <p className="text-gray-600 text-sm">
                        Oferim cursuri specializate pentru clasele 9 și 12, cu materiale didactice complete.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Simulări de Examen</h4>
                      <p className="text-gray-600 text-sm">
                        Simulări complete în condiții reale cu evaluare personalizată.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Suport Online</h4>
                      <p className="text-gray-600 text-sm">
                        Acces la materiale și suport online în orice moment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-green-500 mr-3" />
                  Program și Prezența
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Programul Cursurilor</h4>
                      <p className="text-gray-600 text-sm">
                        Cursurile se desfășoară conform programului stabilit. Modificările vor fi comunicate 
                        cu cel puțin 24 de ore înainte.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Prezența Obligatorie</h4>
                      <p className="text-gray-600 text-sm">
                        Prezența la cursuri este obligatorie. Absențele nejustificate pot afecta progresul 
                        și pot duce la excluderea din curs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Recuperarea</h4>
                      <p className="text-gray-600 text-sm">
                        În cazul absențelor justificate, se poate programa o sesiune de recuperare.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-green-500 mr-3" />
                  Plăți și Rambursări
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Modalități de Plată</h4>
                      <p className="text-gray-600 text-sm">
                        Plățile se pot face prin transfer bancar, numerar sau online. Toate prețurile 
                        sunt exprimate în MDL și includ TVA.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Termenul de Plată</h4>
                      <p className="text-gray-600 text-sm">
                        Plățile trebuie efectuate înainte de începerea cursului sau conform 
                        programului de plăți stabilit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Politica de Rambursare</h4>
                      <p className="text-gray-600 text-sm">
                        Rambursările se pot face în primele 14 zile de la începerea cursului, 
                        cu o taxă administrativă de 10%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  Confidențialitate și Protecția Datelor
                </h2>
                <p className="text-gray-600 mb-4">
                  Protejăm confidențialitatea informațiilor personale furnizate de către utilizatori. 
                  Datele sunt colectate și procesate conform legislației în vigoare privind protecția datelor.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Informațiile personale sunt utilizate exclusiv pentru furnizarea serviciilor educaționale</p>
                  <p>• Datele nu sunt partajate cu terți fără consimțământul explicit al utilizatorului</p>
                  <p>• Utilizatorii au dreptul de a accesa, modifica sau șterge datele lor personale</p>
                  <p>• Implementăm măsuri de securitate pentru protejarea datelor</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                  Limitarea Răspunderii
                </h2>
                <p className="text-gray-600 mb-4">
                  AcademicHub.md nu poate garanta rezultate specifice la examene, deoarece acestea 
                  depind de efortul individual al elevului și de mulți alți factori.
                </p>
                <p className="text-gray-600">
                  Serviciile sunt furnizate &ldquo;așa cum sunt&rdquo; și nu oferim garanții explicite sau implicite 
                  cu privire la disponibilitatea, acuratețea sau completitudinea informațiilor.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-green-500 mr-3" />
                  Modificări și Terminarea
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Modificări ale Serviciilor</h4>
                      <p className="text-gray-600 text-sm">
                        Ne rezervăm dreptul de a modifica, suspenda sau termina serviciile în orice moment, 
                        cu notificare prealabilă.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Terminarea Contractului</h4>
                      <p className="text-gray-600 text-sm">
                        Contractul poate fi reziliat de ambele părți cu notificare scrisă de 30 de zile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  Contact și Suport
                </h2>
                <p className="text-gray-600 mb-4">
                  Pentru orice întrebări legate de acești termeni și condiții sau pentru a raporta 
                  probleme, ne puteți contacta prin:
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Email: info@academichub.md</p>
                  <p>• Telefon: +373 68 217 739</p>
                  <p>• WhatsApp: +373 68 217 739</p>
                  <p>• Adresa: Centrul AcademicHub.md, Chișinău, Moldova</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-sm text-gray-500 text-center">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  Acești termeni și condiții sunt valabili din data actualizării și se aplică tuturor 
                  utilizatorilor serviciilor AcademicHub.md.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
