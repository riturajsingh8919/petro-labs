import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    // Validate input
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Assuming gmail based on standard setup
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const logoUrl =
      "https://res.cloudinary.com/ddl0gpm3n/image/upload/v1785158739/logo-new_hbe9p9.png";
    const brandColor = "#3582ba"; // Primary Blue
    const accentColor = "#f57e18"; // Accent Orange
    const adminEmail = "rituraj.bhavyawebtech@gmail.com";

    // 1. Admin Email Template (Lead Notification)
    const adminMailOptions = {
      from: `"PetroLabs Website" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `New Lead: ${service} Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="padding: 30px; text-align: center; border-bottom: 1px solid #edf2f7;">
              <img src="${logoUrl}" alt="PetroLabs Logo" style="max-width: 200px; width: 100%; height: auto; display: inline-block;" />
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="color: #1a202c; font-size: 24px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #edf2f7; padding-bottom: 15px;">
                New Contact Form Submission
              </div>
              
              <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 16px;">
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0; width: 35%;">Full Name</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Email Address</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color:${brandColor}; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Phone Number</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${phone}</td>
                </tr>
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Company</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${company || "N/A"}</td>
                </tr>
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Service of Interest</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;"><strong>${service}</strong></td>
                </tr>
              </table>
              
              <div style="background: #f8fafc; border-left: 4px solid ${accentColor}; padding: 15px 20px; margin-top: 25px; border-radius: 4px; font-size: 16px; color: #1a202c; line-height: 1.5;">
                <strong style="color: #4a5568;">Message:</strong><br><br>
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; color: #718096; font-size: 13px; border-top: 1px solid #e2e8f0;">
              This is an automated message from the PetroLabs Website Contact Form.
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    // 2. User Auto-Responder Template
    const userMailOptions = {
      from: `"PetroLabs India" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting PetroLabs!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="padding: 30px; text-align: center; border-bottom: 1px solid #edf2f7;">
              <img src="${logoUrl}" alt="PetroLabs Logo" style="max-width: 200px; width: 100%; height: auto; display: inline-block;" />
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px; color: #4a5568; line-height: 1.6; font-size: 16px;">
              <div style="font-size: 20px; font-weight: bold; color: #1a202c; margin-bottom: 20px;">
                Hi ${name},
              </div>
              <p style="margin: 0 0 15px 0;">Thank you for reaching out to <strong>PetroLabs India</strong>.</p>
              <p style="margin: 0 0 15px 0;">We have successfully received your inquiry regarding <strong style="color: ${brandColor};">${service}</strong>. Our team of experts is currently reviewing your request and will get back to you within 24 hours to discuss how we can assist you.</p>
              <p style="margin: 0 0 15px 0;">If your request is urgent, please feel free to call us directly at <strong style="color: ${accentColor};">040-23156400</strong>.</p>
              
              <div style="text-align: center; margin-top: 35px; margin-bottom: 35px;">
                <a href="https://petrolabsindia.com" style="display: inline-block; background-color: ${brandColor}; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: bold; font-size: 16px;">Visit Our Website</a>
              </div>
              
              <p style="margin: 30px 0 0 0;">Best regards,<br><strong style="color: #1a202c;">The PetroLabs Team</strong></p>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 25px; text-align: center; color: #a0aec0; font-size: 14px; border-top: 1px solid #edf2f7;">
              PetroLabs India Pvt. Ltd.<br>
              Plot No 84, FIE, Patparganj Industrial Area, Delhi<br>
              <div style="margin-top: 15px;">
                <a href="https://petrolabsindia.com" style="color: ${brandColor}; text-decoration: none; margin: 0 10px;">Website</a> | 
                <a href="mailto:info@petrolabsindia.com" style="color: ${brandColor}; text-decoration: none; margin: 0 10px;">Contact Us</a>
              </div>
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
