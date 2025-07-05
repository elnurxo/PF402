const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendVerificationEmail = async (
  toEmail,
  userFullName,
  verificationLink
) => {
  try {
    await transporter.sendMail({
      from: `"Bazaar" <${process.env.GMAIL_USER}>`,
      to: toEmail,
      subject: "Verify Your Email Address",
      html: ` <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 40px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="background-color: #1e90ff; padding: 20px; color: white; text-align: center;">
        <h2 style="margin: 0;">Welcome to Bazaar!</h2>
      </div>
      <div style="padding: 30px; color: #333;">
        <p style="font-size: 16px;">Hi ${userFullName},</p>
        <p style="font-size: 16px;">
          Thanks for signing up to <strong>Bazaar</strong>. Please verify your email address by clicking the button below:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationLink}" target="_blank" 
             style="background-color: #1e90ff; color: #ffffff; padding: 14px 24px; text-decoration: none; border-radius: 6px; font-size: 16px;">
            Verify Email
          </a>
        </div>
        <p style="font-size: 14px; color: #666;">
          If you did not create an account, you can safely ignore this email.
        </p>
      </div>
      <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #999;">
        &copy; ${new Date().getFullYear()} Bazaar. All rights reserved.
      </div>
    </div>
  </div>`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = {
  sendVerificationEmail,
};
