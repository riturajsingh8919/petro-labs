import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const experience = formData.get("experience");
    const coverLetter = formData.get("coverLetter");
    const jobTitle = formData.get("jobTitle") || "General Application";
    const resumeFile = formData.get("resume");

    // Validate input
    if (!name || !email || !phone || !experience || !resumeFile) {
      return NextResponse.json(
        { error: "Missing required fields or resume" },
        { status: 400 }
      );
    }

    // Convert File to Buffer for Nodemailer Attachment
    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Configure nodemailer transport
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
    const adminEmail = process.env.ADMIN_EMAIL || "marketing@petrolabsindia.com";

    // 1. Admin Email Template (Job Application)
    const adminMailOptions = {
      from: `"PetroLabs Careers" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `New Job Application: ${jobTitle} - ${name}`,
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
                New Job Application Received
              </div>
              
              <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 16px;">
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0; width: 35%;">Applicant Name</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Applied Position</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;"><strong>${jobTitle}</strong></td>
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
                  <th style="padding: 12px 0; color: #4a5568; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Experience</th>
                  <td style="padding: 12px 0; color: #1a202c; border-bottom: 1px solid #e2e8f0;">${experience}</td>
                </tr>
              </table>
              
              <div style="background: #f8fafc; border-left: 4px solid ${accentColor}; padding: 15px 20px; margin-top: 25px; border-radius: 4px; font-size: 16px; color: #1a202c; line-height: 1.5;">
                <strong style="color: #4a5568;">Cover Letter / Note:</strong><br><br>
                ${coverLetter ? coverLetter.replace(/\n/g, "<br>") : "<em>No cover letter provided.</em>"}
              </div>
              
              <div style="margin-top: 25px; font-size: 14px; color: #4a5568;">
                <strong>Note:</strong> The applicant's resume is attached to this email.
              </div>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; color: #718096; font-size: 13px; border-top: 1px solid #e2e8f0;">
              Automated message from PetroLabs Careers Portal
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    };

    // 2. User Auto-Responder Template
    const userMailOptions = {
      from: `"PetroLabs Careers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Application Received: ${jobTitle}`,
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
              <p style="margin: 0 0 15px 0;">Thank you for applying for the <strong style="color: ${brandColor};">${jobTitle}</strong> position at <strong>PetroLabs India</strong>.</p>
              <p style="margin: 0 0 15px 0;">This email is to confirm that we have successfully received your application and your attached resume.</p>
              <p style="margin: 0 0 15px 0;">Our hiring team will review your profile. If your qualifications match our current requirements, we will reach out to you to discuss the next steps in our interview process.</p>
              
              <div style="text-align: center; margin-top: 35px; margin-bottom: 35px;">
                <a href="https://petrolabsindia.com/careers" style="display: inline-block; background-color: ${brandColor}; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: bold; font-size: 16px;">View Careers Page</a>
              </div>
              
              <p style="margin: 30px 0 0 0;">Best regards,<br><strong style="color: #1a202c;">The PetroLabs Hiring Team</strong></p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 25px; text-align: center; color: #a0aec0; font-size: 14px; border-top: 1px solid #edf2f7;">
              PetroLabs India Pvt. Ltd.<br>
              Plot No 84, FIE, Patparganj Industrial Area, Delhi<br>
              <div style="margin-top: 15px;">
                <a href="https://petrolabsindia.com" style="color: ${brandColor}; text-decoration: none; margin: 0 10px;">Website</a> | 
                <a href="mailto:careers@petrolabsindia.com" style="color: ${brandColor}; text-decoration: none; margin: 0 10px;">Contact HR</a>
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
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
