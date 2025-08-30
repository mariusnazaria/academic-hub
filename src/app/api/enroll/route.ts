import { NextRequest, NextResponse } from 'next/server';
import { sendEnrollmentConfirmation } from '@/lib/email';

// Define enrollment interface
interface EnrollmentData {
  nume: string;
  email: string;
  telefon: string;
  course: string;
  date: string;
  status: string;
}

// Google Apps Script Web App URL - Replace with your actual deployed URL
const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

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
    const enrollmentData: EnrollmentData = {
      nume: nume.trim(),
      email: email.trim().toLowerCase(),
      telefon: telefon.trim(),
      course: course.trim(),
      date: date || new Date().toISOString(),
      status: 'pending'
    };

    // Send data to Google Sheets via Apps Script
    const googleResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollmentData),
    });

    if (!googleResponse.ok) {
      throw new Error('Failed to save to Google Sheets');
    }

    const googleResult = await googleResponse.json();
    
    if (!googleResult.success) {
      throw new Error(googleResult.error || 'Failed to save enrollment data');
    }

    // Log enrollment (for development)
    console.log('New enrollment saved to Google Sheets:', enrollmentData);

    // Send confirmation email to user
    await sendEnrollmentConfirmation({
      nume: enrollmentData.nume,
      email: enrollmentData.email,
      curs: enrollmentData.course
    });

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
