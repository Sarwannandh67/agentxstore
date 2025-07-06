import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// Add root route handler
app.get('/', (req, res) => {
  res.json({ message: 'AgentXstore API is running' });
});

app.post('/send-confirmation', async (req, res) => {
  const { email, name } = req.body;

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'AgentX Team <onboarding@resend.dev>',
      to: email,
      subject: "Welcome to AgentXstore Waitlist! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome to AgentXstore! 🎉</h2>
          <p>Hi${name ? ` ${name}` : ''},</p>
          <p>Thanks for joining the AgentXstore waitlist! You're now part of an exclusive group that will be first to experience the world's first marketplace for AI Agents & Automation Workflows.</p>
          <p>We'll keep you updated on our progress and let you know when we're ready to launch.</p>
          <p>Stay tuned for exciting updates!</p>
          <p style="margin-top: 20px;">Best regards,<br>The AgentXstore Team</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending confirmation email:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));