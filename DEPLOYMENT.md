# Deployment Guide for AgentXstore

## Prerequisites
1. A Vercel account
2. Resend API key
3. Node.js installed locally

## Environment Variables
Before deploying, make sure to set up these environment variables in your Vercel project:

- `RESEND_API_KEY`: Your Resend API key for email functionality
- `EMAIL_FROM`: The email address to send emails from (e.g., 'AgentX Team <team@yourdomain.com>')
- `PORT`: (Optional) Port number for the server (defaults to 5000)

## Deployment Steps

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Post-Deployment

1. Verify the deployment by visiting your Vercel deployment URL
2. Test the email functionality by submitting the waitlist form
3. Monitor the Vercel dashboard for any deployment issues or logs

## Troubleshooting

- If emails aren't sending, verify your Resend API key and email configuration
- Check Vercel deployment logs for any errors
- Ensure all environment variables are properly set in the Vercel dashboard

## Local Development

1. Create a `.env` file with the required environment variables
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

For any issues, check the server logs or contact the development team.