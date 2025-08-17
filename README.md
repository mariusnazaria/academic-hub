# AcademicHub.md - Website Complet

Acest proiect implementează un website complet pentru centrul de pregătire la matematică AcademicHub.md, construit cu Next.js 15, TypeScript și Tailwind CSS.

## 🚀 Caracteristici Implementate

### ✅ Pagini Complete
- **Homepage** - Secțiuni hero, beneficii, categorii, testimoniale, FAQ
- **Cursuri** - 6 cursuri pentru clasele 9 și 12 cu prețuri și detalii
- **Profesori** - Profiluri pentru Catalin Botezat, Dragos Bahov, Ovidiu Harunjen
- **Simulare** - Înscriere la simulări de examen cu formular complet
- **Despre Noi** - Misiune, valori, metodologie și echipă
- **Contact** - Formular de contact și informații de contact
- **Termeni** - Termeni și condiții complete

### ✅ Componente UI
- Header cu navigare și telefon +37368217739
- Footer cu linkuri și informații companie
- CourseCard pentru afișarea cursurilor
- EnrollmentModal pentru înscrieri
- Button component reutilizabil
- Design responsive pentru mobile și desktop

### ✅ Funcționalități
- Formulare de înscriere cu validare
- API routes pentru colectarea datelor
- Salvare date în fișiere CSV
- Integrare WhatsApp și telefon
- SEO optimizat cu sitemap și robots.txt

### ✅ Design și UX
- Paletă de culori verde și alb
- Design modern și profesional
- Animații și tranziții smooth
- Layout responsive pentru toate dispozitivele
- Iconuri Lucide React pentru consistență

## 🛠️ Tehnologii Utilizate

- **Framework**: Next.js 15.4.6
- **Limbaj**: TypeScript
- **Styling**: Tailwind CSS 4
- **Iconuri**: Lucide React
- **Deployment**: Vercel (recomandat)

## 📁 Structura Proiectului

```
academichub-pricing/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── enroll/route.ts      # API pentru înscrieri cursuri
│   │   │   └── simulare/route.ts    # API pentru înscrieri simulări
│   │   ├── cursuri/page.tsx         # Pagina cursuri
│   │   ├── profesori/page.tsx       # Pagina profesori
│   │   ├── simulare/page.tsx        # Pagina simulări
│   │   ├── despre/page.tsx          # Pagina despre noi
│   │   ├── contact/page.tsx         # Pagina contact
│   │   ├── termeni/page.tsx         # Pagina termeni
│   │   ├── layout.tsx               # Layout principal
│   │   ├── page.tsx                 # Homepage
│   │   └── globals.css              # Stiluri globale
│   └── components/
│       ├── Header.tsx               # Componenta header
│       ├── Footer.tsx               # Componenta footer
│       ├── Button.tsx               # Componenta buton
│       ├── CourseCard.tsx           # Card pentru cursuri
│       └── EnrollmentModal.tsx      # Modal pentru înscrieri
├── public/
│   ├── robots.txt                   # SEO robots
│   ├── sitemap.xml                  # Sitemap SEO
│   └── favicon.ico                  # Favicon
└── package.json                     # Dependințe proiect
```

## 🚀 Instalare și Rulare

### 1. Instalare Dependințe
```bash
npm install
```

### 2. Rulare Development Server
```bash
npm run dev
```
Website-ul va fi disponibil la: http://localhost:3000

### 3. Build pentru Production
```bash
npm run build
```

### 4. Rulare Production
```bash
npm start
```

## 📊 Cursuri Implementate

### Clasa 9
- **Clasa 9 A** - Curs intensiv (1500 MDL)
- **Clasa 9 B** - Curs standard (1200 MDL)  
- **Clasa 9 C** - Curs de bază (1000 MDL)

### Clasa 12
- **Clasa 12 A** - Curs intensiv (1800 MDL)
- **Clasa 12 B** - Curs standard (1500 MDL)
- **Clasa 12 C** - Curs de bază (1200 MDL)

## 👨‍🏫 Profesori

- **Catalin Botezat** - Profesor Principal (12 ani experiență)
- **Dragos Bahov** - Profesor Avansat (8 ani experiență)
- **Ovidiu Harunjen** - Profesor pentru Începători (6 ani experiență)

## 📱 Funcționalități Mobile

- Design responsive complet
- Meniu hamburger pentru mobile
- Formulare optimizate pentru touch
- Layout adaptat pentru toate dimensiunile de ecran

## 🔧 Configurare

### Variabile de Mediu
Creați un fișier `.env.local` pentru configurarea API-urilor:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://academichub.md

# Email Configuration (Gmail)
EMAIL_USER=academichubmd@gmail.com
EMAIL_PASS=your_gmail_password
EMAIL_APP_PASSWORD=your_gmail_app_password
```

**Important pentru Email:**
1. **Gmail App Password**: Pentru a trimite emailuri, trebuie să generați o "App Password" în Gmail
2. **2FA Activation**: Activați autentificarea cu doi factori în contul Gmail
3. **App Password**: Mergeți la Google Account → Security → App Passwords
4. **Generate**: Generați o parolă pentru "Mail" și folosiți-o în EMAIL_APP_PASSWORD

### Personalizare Culori
Culorile pot fi modificate în `src/app/globals.css`:

```css
:root {
  --primary: #22c55e;        /* Verde principal */
  --primary-dark: #16a34a;   /* Verde închis */
  --primary-light: #4ade80;  /* Verde deschis */
}
```

## 📈 SEO și Performanță

- Metadata optimizat pentru fiecare pagină
- Sitemap.xml generat automat
- Robots.txt configurat
- Open Graph tags pentru social media
- Lazy loading pentru imagini
- Bundle optimization

## 🚀 Deployment

### Vercel (Recomandat)
1. Push codul pe GitHub
2. Conectați repository-ul la Vercel
3. Configurați domeniul academichub.md
4. Deploy automat la fiecare push

### GitHub Pages
1. Configurați `next.config.ts` cu `output: "export"`
2. Rulați `npm run build`
3. Deployați folderul `out/` pe GitHub Pages

## 📊 Colectarea Datelor

Website-ul colectează date prin:
- Formulare de înscriere la cursuri
- Formulare de înscriere la simulări
- Formulare de contact

Datele sunt salvate în fișiere CSV:
- `enrollments.csv` - Înscrieri la cursuri
- `simulari.csv` - Înscrieri la simulări

## 🔒 Securitate

- Validare formular pe client și server
- Sanitizare date de intrare
- Protecție împotriva XSS
- Rate limiting pentru API-uri

## 📞 Contact

- **Telefon**: +373 68 217 739
- **WhatsApp**: +373 68 217 739
- **Email**: info@academichub.md
- **Adresa**: Centrul AcademicHub.md, Chișinău, Moldova

## 📝 Licență

Proprietar - AcademicHub.md. Conținut original, nu copiați texte din alte surse.

## 🤝 Contribuții

1. Fork repository-ul
2. Creați un branch pentru feature
3. Commit modificările
4. Push la branch
5. Creați un Pull Request

## 📋 Checklist Implementare

- [x] Homepage cu toate secțiunile
- [x] Pagina cursuri cu 6 oferte
- [x] Pagina profesori cu 3 profesori
- [x] Pagina simulări cu formular
- [x] Pagina despre noi cu placeholder
- [x] Pagina contact cu formular
- [x] Pagina termeni și condiții
- [x] Header cu telefon +37368217739
- [x] Footer cu linkuri
- [x] API routes pentru formulare
- [x] Salvare date CSV
- [x] Design verde și alb
- [x] Responsive design
- [x] SEO optimization
- [x] WhatsApp integration
- [x] Form validation
- [x] Error handling

## 🎯 Următorii Pași

1. **Deployment** pe Vercel sau alt platform
2. **Configurare domeniu** academichub.md
3. **Integrare Google Analytics**
4. **Testare cross-browser**
5. **Optimizare performanță**
6. **Backup și monitoring**

---

Website-ul este gata pentru production și poate fi folosit imediat pentru colectarea de leads și vânzări pentru AcademicHub.md! 🎉