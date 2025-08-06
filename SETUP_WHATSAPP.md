# WhatsApp Integration Setup

This setup allows the contact form to automatically send PDFs and form data to WhatsApp numbers.

## Prerequisites

1. **Twilio Account** (for WhatsApp Business API)
2. **Node.js** installed on your server
3. **Domain** for hosting the backend server

## Setup Steps

### 1. Twilio Setup

1. Go to [Twilio Console](https://console.twilio.com/)
2. Create a new account or sign in
3. Navigate to **Messaging** → **Try it out** → **Send a WhatsApp message**
4. Follow the setup wizard to get your WhatsApp number
5. Note down your:
   - Account SID
   - Auth Token
   - WhatsApp number (e.g., +14155238886)

### 2. Update Server Configuration

Edit `server.js` and replace these values:

```javascript
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
// Update the from number with your Twilio WhatsApp number
from: 'whatsapp:+14155238886',
```

### 3. Deploy Backend Server

#### Option A: Local Development
```bash
# Install server dependencies
npm install

# Start the server
node server.js
```

#### Option B: Deploy to Cloud (Recommended)
Deploy to services like:
- **Heroku**
- **Railway**
- **Render**
- **DigitalOcean**

### 4. Update Frontend URL

In `ContactUs.jsx`, update the server URL:

```javascript
// Replace with your deployed server URL
const response = await fetch('https://your-server-domain.com/send-pdf-whatsapp', {
```

### 5. Test the Integration

1. Fill out the contact form
2. Submit the form
3. Check your WhatsApp numbers for the message

## Features

### 📄 PDF Generation
- Creates professional PDF with form data
- Includes FLUXURIOUS TECH branding
- Auto-downloads to user's device

### 📱 WhatsApp Integration
- Sends PDF to number: `9967846507`
- Also sends formatted text message as backup
- Uses Twilio WhatsApp Business API

### 🔄 Form Handling
- Loading states during submission
- Error handling and user feedback
- Form reset after successful submission

## Message Format

The WhatsApp message includes:
```
📋 NEW CONTACT FORM SUBMISSION

👤 Name: [User Name]
📧 Email: [User Email]
📱 Phone: [User Phone]
🏢 Company: [User Company]
🎯 Project Type: [Selected Type]

📝 Project Details:
[User Message]

⏰ Submitted: [Timestamp]
```

## Troubleshooting

### Common Issues:

1. **CORS Error**: Ensure server has CORS enabled
2. **Twilio Auth Error**: Check Account SID and Auth Token
3. **File Upload Error**: Ensure uploads directory exists
4. **WhatsApp Not Receiving**: Verify Twilio WhatsApp setup

### Debug Steps:

1. Check server logs for errors
2. Verify Twilio credentials
3. Test with Twilio's WhatsApp sandbox first
4. Ensure phone numbers are in correct format (+91XXXXXXXXXX)

## Security Notes

- Keep Twilio credentials secure
- Use environment variables for sensitive data
- Implement rate limiting for production
- Add input validation and sanitization 