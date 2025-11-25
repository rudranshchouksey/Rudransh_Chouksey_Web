// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  to: string;
  subject: string;
  message: string;
  fullName: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json();
    const { to, subject, message, fullName, email, projectType, budget, timeline } = body;

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
New Portfolio Contact Form Submission

Name: ${fullName}
Email: ${email}
Subject: ${subject}
Project Type: ${projectType || 'Not specified'}
Budget: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

Message:
${message}

---
Sent from Portfolio Contact Form
    `.trim();

    const { data, error } = await resend.emails.send({
      from: 'portfolio@yourdomain.com', // Replace with your verified domain
      to: [to],
      subject: subject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">
            New Portfolio Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Sent from Portfolio Contact Form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' }, 
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
