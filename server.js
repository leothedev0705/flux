const express = require('express');
const multer = require('multer');
const cors = require('cors');
const twilio = require('twilio');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Twilio configuration
// You'll need to get these from your Twilio account
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

// WhatsApp numbers
const whatsappNumbers = ['+919967846507'];

// Route to send PDF to WhatsApp
app.post('/send-pdf-whatsapp', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No PDF file uploaded' });
    }

    const pdfPath = req.file.path;
    const formData = req.body;

    // Send to each WhatsApp number
    for (const phoneNumber of whatsappNumbers) {
      try {
        await client.messages.create({
          body: `New contact form submission from FLUXURIOUS TECH website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.message}`,
          from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
          to: `whatsapp:${phoneNumber}`,
          mediaUrl: [`https://your-domain.com/uploads/${req.file.filename}`] // You'll need to host this file publicly
        });
      } catch (error) {
        console.error(`Error sending to ${phoneNumber}:`, error);
      }
    }

    // Clean up uploaded file
    fs.unlinkSync(pdfPath);

    res.json({ success: true, message: 'PDF sent to WhatsApp numbers' });
  } catch (error) {
    console.error('Error sending PDF:', error);
    res.status(500).json({ error: 'Failed to send PDF' });
  }
});

// Alternative: Send form data directly without PDF
app.post('/send-form-whatsapp', async (req, res) => {
  try {
    const formData = req.body;

    // Send to each WhatsApp number
    for (const phoneNumber of whatsappNumbers) {
      try {
        await client.messages.create({
          body: `📋 *NEW CONTACT FORM SUBMISSION*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Phone:* ${formData.phone}\n🏢 *Company:* ${formData.company}\n🎯 *Project Type:* ${formData.projectType}\n\n📝 *Project Details:*\n${formData.message}\n\n⏰ *Submitted:* ${new Date().toLocaleString()}`,
          from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
          to: `whatsapp:${phoneNumber}`
        });
      } catch (error) {
        console.error(`Error sending to ${phoneNumber}:`, error);
      }
    }

    res.json({ success: true, message: 'Form data sent to WhatsApp numbers' });
  } catch (error) {
    console.error('Error sending form data:', error);
    res.status(500).json({ error: 'Failed to send form data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 