const nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
const sendMail = async ({
  subject,
  toEmail,
  text,
  html,
}: {
  subject: string;
  toEmail: string;
  text: string;
  html: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: "true",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Patudos Vagos <${process.env.NODEMAILER_EMAIL}>`,
    to: toEmail,
    subject,
    text,
    html,
  };

  transporter.sendMail(mailOptions, (error: string) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
};

export default sendMail;
