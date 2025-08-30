// Google Apps Script for AcademicHub Enrollment Form
// Deploy this as a web app to handle form submissions

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.nume || '',
      data.email || '',
      data.telefon || '',
      data.course || '',
      data.date || new Date().toISOString(),
      'pending' // Status
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Înscrierea a fost salvată cu succes!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: 'A apărut o eroare la salvarea datelor: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('AcademicHub Enrollment API is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up the sheet headers
function setupSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getActiveSheet();
  
  // Set headers
  const headers = [
    'Timestamp',
    'Nume',
    'Email', 
    'Telefon',
    'Curs',
    'Data Înscrierii',
    'Status'
  ];
  
  // Clear existing content and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground('#4BAD01')
    .setFontColor('white')
    .setFontWeight('bold');
    
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
}

// Function to create a new enrollment sheet
function createEnrollmentSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = 'Înscrieri ' + new Date().getFullYear();
  
  // Check if sheet already exists
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  
  // Set as active sheet
  spreadsheet.setActiveSheet(sheet);
  
  // Setup headers
  setupSheet();
  
  return sheet;
}
