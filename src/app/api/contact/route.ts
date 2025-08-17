import { NextRequest, NextResponse } from 'next/server';
import { writeFile, appendFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { sendContactMessagesToAdmin, sendContactConfirmation } from '@/lib/email';

// Define contact interface
interface ContactData {
  nume: string;
  email: string;
  telefon: string;
  mesaj: string;
  data: string;
}

// Helper function to get all contacts for admin email
async function getAllContacts() {
  try {
    const csvPath = path.join(process.cwd(), 'contacts.csv');
    if (!existsSync(csvPath)) return [];
    
    const content = await readFile(csvPath, 'utf8');
    const lines = content.trim().split('\n');
    const headers = lines[0].split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const contact: ContactData = {
        nume: '',
        email: '',
        telefon: '',
        mesaj: '',
        data: ''
      };
      headers.forEach((header, index) => {
        const key = header.toLowerCase() as keyof ContactData;
        if (key in contact) {
          contact[key] = values[index] || '';
        }
      });
      return contact;
    });
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nume, email, telefon, mesaj } = body;

    // Validate required fields
    if (!nume || !email || !mesaj) {
      return NextResponse.json(
        { error: 'Numele, emailul și mesajul sunt obligatorii' },
        { status: 400 }
      );
    }

    // Create contact data
    const contactData: ContactData = {
      nume: nume.trim(),
      email: email.trim().toLowerCase(),
      telefon: telefon?.trim() || '',
      mesaj: mesaj.trim(),
      data: new Date().toISOString()
    };

    // Create CSV header if file doesn't exist
    const csvHeader = 'Nume,Email,Telefon,Mesaj,Data\n';
    const csvRow = `"${contactData.nume}","${contactData.email}","${contactData.telefon}","${contactData.mesaj}","${contactData.data}"\n`;

    // Save to CSV file
    const csvPath = path.join(process.cwd(), 'contacts.csv');
    
    if (!existsSync(csvPath)) {
      // Create new file with header
      await writeFile(csvPath, csvHeader + csvRow, 'utf8');
    } else {
      // Append to existing file
      await appendFile(csvPath, csvRow, 'utf8');
    }

    // Log contact (for development)
    console.log('New contact message:', contactData);

    // Send confirmation email to user
    await sendContactConfirmation({
      nume: contactData.nume,
      email: contactData.email
    });

    // Send contact messages to admin (with CSV attachment)
    const allContacts = await getAllContacts();
    await sendContactMessagesToAdmin(allContacts);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Mesajul a fost trimis cu succes! Vă rugăm să verificați emailul pentru confirmare.',
      data: contactData
    });

  } catch (error) {
    console.error('Contact error:', error);
    
    return NextResponse.json(
      { 
        error: 'A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.' 
      },
      { status: 500 }
    );
  }
}
