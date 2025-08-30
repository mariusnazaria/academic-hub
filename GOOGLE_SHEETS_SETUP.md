# Google Sheets Setup Guide for AcademicHub Enrollment

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Sign in with `academichub@gmail.com`
3. Create a new spreadsheet named "AcademicHub Enrollments"
4. Rename the first sheet to "Înscrieri 2024"

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default code and paste the contents of `google-apps-script.js`
3. Save the project as "AcademicHub Enrollment Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Choose **Web app** as the type
3. Set the following:
   - **Execute as**: Me (academichub@gmail.com)
   - **Who has access**: Anyone
4. Click **Deploy**
5. Copy the **Web app URL** (you'll need this for the environment variable)

## Step 4: Configure Environment Variables

Add the following to your `.env.local` file:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual script ID from the deployment URL.

## Step 5: Test the Setup

1. Run the `setupSheet()` function in Apps Script to create headers
2. Test the enrollment form on your website
3. Check that data appears in the Google Sheet

## Step 6: Sheet Structure

The Google Sheet will have the following columns:

| Column | Description |
|--------|-------------|
| A | Timestamp |
| B | Nume |
| C | Email |
| D | Telefon |
| E | Curs |
| F | Data Înscrierii |
| G | Status |

## Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure the Apps Script is deployed as a web app with "Anyone" access
2. **Permission Denied**: Ensure the script is executed as the correct user
3. **Data Not Saving**: Check that the web app URL is correct in your environment variables

### Testing the API:

You can test the Google Apps Script directly by visiting the web app URL in your browser. It should display "AcademicHub Enrollment API is running!"

## Security Notes

- The Google Apps Script URL should be kept private
- Consider implementing additional validation in the Apps Script
- Monitor the sheet for any unusual activity
