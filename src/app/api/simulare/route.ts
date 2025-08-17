import { NextRequest, NextResponse } from 'next/server';
import { writeFile, appendFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { sendSimulationConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nume, email, telefon, clasa, data, locatie, date } = body;

    // Validate required fields
    if (!nume || !email || !telefon || !clasa || !data || !locatie) {
      return NextResponse.json(
        { error: 'Toate câmpurile sunt obligatorii' },
        { status: 400 }
      );
    }

    // Create simulation registration data
    const simulationData = {
      nume: nume.trim(),
      email: email.trim().toLowerCase(),
      telefon: telefon.trim(),
      clasa: clasa.trim(),
      data_simulare: data.trim(),
      locatie: locatie.trim(),
      date: date || new Date().toISOString(),
      status: 'pending'
    };

    // Create CSV header if file doesn't exist
    const csvHeader = 'Nume,Email,Telefon,Clasa,Data_Simulare,Locatie,Data_Inscriere,Status\n';
    const csvRow = `${simulationData.nume},${simulationData.email},${simulationData.telefon},${simulationData.clasa},${simulationData.data_simulare},${simulationData.locatie},${simulationData.date},${simulationData.status}\n`;

    // Save to CSV file
    const csvPath = path.join(process.cwd(), 'simulari.csv');
    
    if (!existsSync(csvPath)) {
      // Create new file with header
      await writeFile(csvPath, csvHeader + csvRow, 'utf8');
    } else {
      // Append to existing file
      await appendFile(csvPath, csvRow, 'utf8');
    }

    // Log simulation registration (for development)
    console.log('New simulation registration:', simulationData);

    // Send confirmation email to user
    await sendSimulationConfirmation({
      nume: simulationData.nume,
      email: simulationData.email,
      clasa: simulationData.clasa,
      dataSimulare: simulationData.dataSimulare
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Înscrierea la simulare a fost trimisă cu succes! Vă rugăm să verificați emailul pentru confirmare.',
      data: simulationData
    });

  } catch (error) {
    console.error('Simulation registration error:', error);
    
    return NextResponse.json(
      { 
        error: 'A apărut o eroare la procesarea înscrierii la simulare. Vă rugăm să încercați din nou.' 
      },
      { status: 500 }
    );
  }
}
