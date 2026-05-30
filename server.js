import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.post('/api/contact', (req, res) => {
  const { name, company, email, type } = req.body;
  
  // In a real application, you would save this to a database
  // or send an email using a service like SendGrid/Nodemailer.
  console.log('--- New Contact Inquiry ---');
  console.log(`Name: ${name}`);
  console.log(`Company: ${company}`);
  console.log(`Email: ${email}`);
  console.log(`Type: ${type}`);
  console.log('---------------------------');
  
  // Send success response
  res.status(200).json({ success: true, message: 'Inquiry received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
