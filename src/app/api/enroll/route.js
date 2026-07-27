import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, course, message } = body;

    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const logoUrl =
      "https://res.cloudinary.com/ddl0gpm3n/image/upload/v1785158739/logo-new_hbe9p9.png";
    const brandColor = "#3582ba";
    const accentColor = "#f57e18";
    const adminEmail =
      process.env.ADMIN_EMAIL || "marketing@petrolabsindia.com";

    // 1. Admin Email Template
    const adminMailOptions = {
      from: `"PetroLabs Training" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `New Course Enrollment: ${course} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <div style="padding: 30px; text-align: center; border-bottom: 1px solid #edf2f7;">
              <img src="${logoUrl}" alt="PetroLabs Logo" style="max-width: 200px; width: 100%; height: auto; display: inline-block;" />
            </div>
            
            <div style="padding: 40px 30px;">
              <div style="color: #1a202c; font-size: 24px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #edf2f7; padding-bottom: 15px;">
                New Enrollment Request
              </div>
              
              <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 16px;">
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0; width: 35%;">Student Name</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Course</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;"><strong>${course}</strong></td>
                </tr>
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Email Address</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color:${brandColor}; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Phone Number</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${phone}</td>
                </tr>
              </table>
              
              ${
                message
                  ? `
                <div style="background: #f8fafc; border-left: 4px solid ${accentColor}; padding: 15px 20px; margin-top: 25px; border-radius: 4px; font-size: 16px; color: #1a202c; line-height: 1.5;">
                  <strong style="color: #4a5568;">Message:</strong><br><br>
                  ${message.replace(/\n/g, "<br>")}
                </div>
              `
                  : ""
              }
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; color: #718096; font-size: 13px; border-top: 1px solid #e2e8f0;">
              Automated message from PetroLabs Training Academy
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. User Auto-Responder Template
    const userMailOptions = {
      from: `"PetroLabs Training" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Enrollment Request Received: ${course}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <div style="padding: 30px; text-align: center; border-bottom: 1px solid #edf2f7;">
              <img src="${logoUrl}" alt="PetroLabs Logo" style="max-width: 200px; width: 100%; height: auto; display: inline-block;" />
            </div>
            
            <div style="padding: 40px 30px; color: #4a5568; line-height: 1.6; font-size: 16px;">
              <div style="font-size: 20px; font-weight: bold; color: #1a202c; margin-bottom: 20px;">
                Hi ${name},
              </div>
              <p style="margin: 0 0 15px 0;">Thank you for your interest in the <strong style="color: ${brandColor};">${course}</strong> training program at <strong>PetroLabs Academy</strong>.</p>
              <p style="margin: 0 0 15px 0;">We have received your enrollment request successfully. Our training coordinators will review your details and reach out to you shortly with the schedule, fee structure, and next steps.</p>
              
              <div style="text-align: center; margin-top: 35px; margin-bottom: 35px;">
                <a href="https://petrolabsindia.com/training" style="display: inline-block; background-color: ${brandColor}; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: bold; font-size: 16px;">Explore More Courses</a>
              </div>
              
              <p style="margin: 30px 0 0 0;">Best regards,<br><strong style="color: #1a202c;">The PetroLabs Training Team</strong></p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 25px; text-align: center; color: #a0aec0; font-size: 14px; border-top: 1px solid #edf2f7;">
              PetroLabs India Pvt. Ltd.<br>
              Plot No 84, FIE, Patparganj Industrial Area, Delhi<br>
              <div style="margin-top: 15px;">
                <a href="https://petrolabsindia.com" style="color: ${brandColor}; text-decoration: none; margin: 0 10px;">Website</a> | 
                <a href="mailto:training@petrolabsindia.com" style="color: ${brandColor}; text-decoration: none; margin: 0 10px;">Contact Support</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: "Enrollment submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error submitting enrollment:", error);
    return NextResponse.json(
      { error: "Failed to submit enrollment. Please try again." },
      { status: 500 },
    );
  }
}
