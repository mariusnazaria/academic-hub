import { NextRequest, NextResponse } from 'next/server';
import { writeFile, appendFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { sendEnrollmentDataToAdmin, sendEnrollmentConfirmation } from '@/lib/email';

// Helper function to get all enrollments for admin email
async function getAllEnrollments() {
  try {
    const csvPath = path.join(process.cwd(), 'enrollments.csv');
    if (!existsSync(csvPath)) return [];
    
    const content = await readFile(csvPath, 'utf8');
    const lines = content.trim().split('\n');
    const headers = lines[0].split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const enrollment: any = {};
      headers.forEach((header, index) => {
        enrollment[header] = values[index] || '';
      });
      return enrollment;
    });
  } catch (error) {
    console.error('Error reading enrollments:', error);
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nume, email, telefon, course, date } = body;

    // Validate required fields
    if (!nume || !email || !telefon || !course) {
      return NextResponse.json(
        { error: 'Toate câmpurile sunt obligatorii' },
        { status: 400 }
      );
    }

    // Create enrollment data
    const enrollmentData = {
      nume: nume.trim(),
      email: email.trim().toLowerCase(),
      telefon: telefon.trim(),
      course: course.trim(),
      date: date || new Date().toISOString(),
      status: 'pending'
    };

    // Create CSV header if file doesn't exist
    const csvHeader = 'Nume,Email,Telefon,Curs,Data,Status\n';
    const csvRow = `${enrollmentData.nume},${enrollmentData.email},${enrollmentData.telefon},${enrollmentData.course},${enrollmentData.date},${enrollmentData.status}\n`;

    // Save to CSV file
    const csvPath = path.join(process.cwd(), 'enrollments.csv');
    
    if (!existsSync(csvPath)) {
      // Create new file with header
      await writeFile(csvPath, csvHeader + csvRow, 'utf8');
    } else {
      // Append to existing file
      await appendFile(csvPath, csvRow, 'utf8');
    }

    // Log enrollment (for development)
    console.log('New enrollment:', enrollmentData);

    // Send confirmation email to user
    await sendEnrollmentConfirmation({
      nume: enrollmentData.nume,
      email: enrollmentData.email,
      curs: enrollmentData.course
    });

    // Send enrollment data to admin (with CSV attachment)
    const allEnrollments = await getAllEnrollments();
    await sendEnrollmentDataToAdmin(allEnrollments);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Înscrierea a fost trimisă cu succes! Vă rugăm să verificați emailul pentru confirmare.',
      data: enrollmentData
    });

  } catch (error) {
    console.error('Enrollment error:', error);
    
    return NextResponse.json(
      { 
        error: 'A apărut o eroare la procesarea înscrierii. Vă rugăm să încercați din nou.' 
      },
      { status: 500 }
    );
  }
}
