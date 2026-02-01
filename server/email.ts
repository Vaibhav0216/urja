import nodemailer from 'nodemailer';
import type { Inquiry } from '@shared/schema';

// Validate required environment variables
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.warn(`Warning: Missing email environment variables: ${missingVars.join(', ')}. Email notifications will be disabled.`);
}

// CC_EMAIL is optional - supports comma-separated multiple emails
const ccEmail = process.env.CC_EMAIL 
  ? process.env.CC_EMAIL.split(',').map(email => email.trim()).filter(Boolean)
  : [];

// Create transporter with Zoho SMTP settings
const createTransporter = () => {
  if (missingVars.length > 0) {
    return null;
  }

  const isProduction = process.env.NODE_ENV === 'production';

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465 (SSL), false for other ports (TLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      // Only reject unauthorized certificates in production
      rejectUnauthorized: isProduction,
      minVersion: 'TLSv1.2',
    },
  });
};

const transporter = createTransporter();

/**
 * Send email notification when a new inquiry is submitted
 * @param inquiry - The inquiry data from the contact form
 */
export async function sendInquiryNotification(inquiry: Inquiry): Promise<void> {
  console.log('📧 Attempting to send email notification...');
  
  if (!transporter) {
    const error = 'Email transporter not configured. Please set SMTP environment variables.';
    console.error('❌', error);
    throw new Error(error);
  }

  console.log('📨 Email config:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
    cc: ccEmail.length > 0 ? ccEmail.join(', ') : 'none',
  });

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h2 {
          color: #2563eb;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 10px;
        }
        .field {
          margin: 15px 0;
        }
        .field strong {
          display: inline-block;
          width: 120px;
          color: #555;
        }
        .requirement {
          background-color: #f3f4f6;
          padding: 15px;
          border-radius: 5px;
          margin: 15px 0;
        }
        .footer {
          margin-top: 30px;
          padding-top: 15px;
          border-top: 1px solid #e5e7eb;
          font-size: 12px;
          color: #6b7280;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>🔔 New Contact Form Submission</h2>

        <div class="field">
          <strong>Name:</strong> ${inquiry.name}
        </div>

        <div class="field">
          <strong>Company:</strong> ${inquiry.company}
        </div>

        <div class="field">
          <strong>Email:</strong> <a href="mailto:${inquiry.email}">${inquiry.email}</a>
        </div>

        <div class="field">
          <strong>Phone:</strong> <a href="tel:${inquiry.phone}">${inquiry.phone}</a>
        </div>

        <div class="field">
          <strong>Project Requirement:</strong>
        </div>
        <div class="requirement">
          ${inquiry.requirement.replace(/\n/g, '<br>')}
        </div>

        <div class="footer">
          <p>Submitted at: ${inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : 'N/A'}</p>
          <p>This is an automated notification from Urja Contact Form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission

Name: ${inquiry.name}
Company: ${inquiry.company}
Email: ${inquiry.email}
Phone: ${inquiry.phone}

Project Requirement:
${inquiry.requirement}

Submitted at: ${inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : 'N/A'}
  `;

  const mailOptions: any = {
    from: `"Urja Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Inquiry from ${inquiry.name} - ${inquiry.company}`,
    text: textContent,
    html: htmlContent,
  };

  // Add CC if configured
  if (ccEmail.length > 0) {
    mailOptions.cc = ccEmail;
  }

  try {
    console.log('📤 Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('📬 Message ID:', info.messageId);
    console.log('📮 Accepted:', info.accepted);
    console.log('🚫 Rejected:', info.rejected);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    throw error;
  }
}