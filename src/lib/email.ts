import nodemailer from 'nodemailer';

// Define interfaces for type safety
interface ContactData {
  nume: string;
  email: string;
  telefon: string;
  mesaj: string;
  data: string;
}

interface EnrollmentData {
  nume: string;
  email: string;
  telefon: string;
  course: string;
  date: string;
  status: string;
}

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'academichubmd@gmail.com',
    pass: process.env.EMAIL_PASS || process.env.EMAIL_APP_PASSWORD,
  },
});

// Generate CSV content from data
export function generateCSV(data: (ContactData | EnrollmentData)[], headers: string[]): string {
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header.toLowerCase() as keyof (ContactData | EnrollmentData)] || '';
        // Escape quotes and wrap in quotes if contains comma
        return `"${String(value).replace(/"/g, '""')}"`;
      }).join(',')
    )
  ].join('\n');
  
  return csvContent;
}

// Send enrollment data to admin
export async function sendEnrollmentDataToAdmin(enrollments: EnrollmentData[]) {
  if (enrollments.length === 0) return;

  const csvContent = generateCSV(enrollments, [
    'Nume', 'Email', 'Telefon', 'Curs', 'Data', 'Status'
  ]);

  const csvBuffer = Buffer.from(csvContent, 'utf-8');
  const filename = `enrollments_${new Date().toISOString().split('T')[0]}.csv`;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'academichubmd@gmail.com',
    to: 'academichubmd@gmail.com',
    subject: `Înscrieri Cursuri - ${new Date().toLocaleDateString('ro-RO')}`,
    html: `
      <h2>Înscrieri Noi la Cursuri</h2>
      <p>Găsiți atașat fișierul CSV cu înscrierile la cursuri.</p>
      <p><strong>Total înscrieri:</strong> ${enrollments.length}</p>
      <p><strong>Data raport:</strong> ${new Date().toLocaleDateString('ro-RO')}</p>
      <br>
      <p>Cu stimă,<br>AcademicHub.md</p>
    `,
    attachments: [
      {
        filename,
        content: csvBuffer,
        contentType: 'text/csv',
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Enrollment data sent to admin: ${enrollments.length} records`);
  } catch (error) {
    console.error('❌ Error sending enrollment data to admin:', error);
  }
}

// Send contact messages to admin
export async function sendContactMessagesToAdmin(contacts: ContactData[]) {
  if (contacts.length === 0) return;

  const csvContent = generateCSV(contacts, [
    'Nume', 'Email', 'Telefon', 'Mesaj', 'Data'
  ]);

  const csvBuffer = Buffer.from(csvContent, 'utf-8');
  const filename = `contacts_${new Date().toISOString().split('T')[0]}.csv`;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'academichubmd@gmail.com',
    to: 'academichubmd@gmail.com',
    subject: `Mesaje Contact - ${new Date().toLocaleDateString('ro-RO')}`,
    html: `
      <h2>Mesaje Noi de Contact</h2>
      <p>Găsiți atașat fișierul CSV cu mesajele de contact.</p>
      <p><strong>Total mesaje:</strong> ${contacts.length}</p>
      <p><strong>Data raport:</strong> ${new Date().toLocaleDateString('ro-RO')}</p>
      <br>
      <p>Cu stimă,<br>AcademicHub.md</p>
    `,
    attachments: [
      {
        filename,
        content: csvBuffer,
        contentType: 'text/csv',
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Contact messages sent to admin: ${contacts.length} records`);
  } catch (error) {
    console.error('❌ Error sending contact messages to admin:', error);
  }
}

// Send confirmation email to user after enrollment
export async function sendEnrollmentConfirmation(userData: {
  nume: string;
  email: string;
  curs: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'academichubmd@gmail.com',
    to: userData.email,
    subject: 'Confirmare Înscriere - AcademicHub.md',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #22c55e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">AcademicHub.md</h1>
          <p style="margin: 10px 0 0 0;">Centru de Pregătire la Matematică</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #22c55e; margin-bottom: 20px;">Înscrierea Dvs. a fost Confirmată!</h2>
          
          <p>Stimate/ă <strong>${userData.nume}</strong>,</p>
          
          <p>Vă mulțumim pentru înscrierea la cursul <strong>${userData.curs}</strong>!</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
            <h3 style="color: #22c55e; margin-top: 0;">Detalii Înscriere:</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li><strong>Curs:</strong> ${userData.curs}</li>
              <li><strong>Data înscrierii:</strong> ${new Date().toLocaleDateString('ro-RO')}</li>
            </ul>
          </div>
          
          <p><strong>Următorii pași:</strong></p>
          <ol style="margin: 10px 0; padding-left: 20px;">
            <li>Vă vom contacta în cel mai scurt timp pentru confirmarea finală</li>
            <li>Înregistrarea va fi în funcție de testul de evaluare și disponibilitatea locurilor</li>
            <li>Veți primi programul exact și materialele necesare</li>
          </ol>
          
          <p><strong>Important:</strong> Înregistrarea finală va fi în funcție de testul de evaluare și disponibilitatea locurilor în grup. Datele Dvs. au fost salvate în sistemul nostru.</p>
          
          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #166534;"><strong>📞 Contact:</strong> +373 68 217 739</p>
             <p style="margin: 5px 0 0 0; color: #166534;"><strong>📱 Viber:</strong> +373 68 217 739</p>
            <p style="margin: 5px 0 0 0; color: #166534;"><strong>📧 Email:</strong> academichubmd@gmail.com</p>
          </div>
          
          <p>Cu stimă,<br><strong>Echipa AcademicHub.md</strong></p>
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
          <p>© 2024 AcademicHub.md. Toate drepturile rezervate.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Enrollment confirmation sent to: ${userData.email}`);
  } catch (error) {
    console.error('❌ Error sending enrollment confirmation:', error);
  }
}

// Send confirmation email to user after contact form
export async function sendContactConfirmation(userData: {
  nume: string;
  email: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'academichubmd@gmail.com',
    to: userData.email,
    subject: 'Mesajul Dvs. a fost Primit - AcademicHub.md',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #22c55e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">AcademicHub.md</h1>
          <p style="margin: 10px 0 0 0;">Centru de Pregătire la Matematică</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #22c55e; margin-bottom: 20px;">Mesajul Dvs. a fost Primit!</h2>
          
          <p>Stimate/ă <strong>${userData.nume}</strong>,</p>
          
          <p>Vă mulțumim pentru mesajul trimis! Vă vom răspunde în cel mai scurt timp posibil.</p>
          
          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #166534;"><strong>📞 Contact:</strong> +373 68 217 739</p>
            <p style="margin: 5px 0 0 0; color: #166534;"><strong>📱 Viber:</strong> +373 68 217 739</p>
            <p style="margin: 5px 0 0 0; color: #166534;"><strong>📧 Email:</strong> academichubmd@gmail.com</p>
          </div>
          
          <p>Cu stimă,<br><strong>Echipa AcademicHub.md</strong></p>
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
          <p>© 2024 AcademicHub.md. Toate drepturile rezervate.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Contact confirmation sent to: ${userData.email}`);
  } catch (error) {
    console.error('❌ Error sending contact confirmation:', error);
  }
}

// Send simulation registration confirmation
export async function sendSimulationConfirmation(userData: {
  nume: string;
  email: string;
  clasa: string;
  dataSimulare: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'academichubmd@gmail.com',
    to: userData.email,
    subject: 'Confirmare Înscriere Simulare - AcademicHub.md',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #22c55e; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">AcademicHub.md</h1>
          <p style="margin: 10px 0 0 0;">Centru de Pregătire la Matematică</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #22c55e; margin-bottom: 20px;">Înscrierea la Simulare a fost Confirmată!</h2>
          
          <p>Stimate/ă <strong>${userData.nume}</strong>,</p>
          
          <p>Vă mulțumim pentru înscrierea la simularea de examen!</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
            <h3 style="color: #22c55e; margin-top: 0;">Detalii Simulare:</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li><strong>Clasa:</strong> ${userData.clasa}</li>
              <li><strong>Data simulării:</strong> ${new Date(userData.dataSimulare).toLocaleDateString('ro-RO')}</li>
              <li><strong>Data înscrierii:</strong> ${new Date().toLocaleDateString('ro-RO')}</li>
            </ul>
          </div>
          
          <p><strong>Următorii pași:</strong></p>
          <ol style="margin: 10px 0; padding-left: 20px;">
            <li>Vă vom contacta pentru confirmarea finală</li>
            <li>Veți primi locația exactă și programul simulării</li>
            <li>Vă recomandăm să veniți cu 15 minute înainte</li>
          </ol>
          
          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #166534;"><strong>📞 Contact:</strong> +373 68 217 739</p>
            <p style="margin: 5px 0 0 0; color: #166534;"><strong>📱 Viber:</strong> +373 68 217 739</p>
            <p style="margin: 5px 0 0 0; color: #166534;"><strong>📧 Email:</strong> academichubmd@gmail.com</p>
          </div>
          
          <p>Cu stimă,<br><strong>Echipa AcademicHub.md</strong></p>
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
          <p>© 2024 AcademicHub.md. Toate drepturile rezervate.</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Simulation confirmation sent to: ${userData.email}`);
  } catch (error) {
    console.error('❌ Error sending simulation confirmation:', error);
  }
}
