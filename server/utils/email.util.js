const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const { ADMIN_USER_GMAIL, ADMIN_USER_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: ADMIN_USER_GMAIL,
    pass: ADMIN_USER_PASS,
  },
});

const readHtmlTemplate = (templatePath) => {
  const filePath = path.join(__dirname, templatePath);
  return fs.readFileSync(filePath, "utf8");
};

const sendInvite = async (to, url) => {
  const path = "../templates/inviteTemplate.html";
  const htmlTemplate = readHtmlTemplate(path);
  const mailOptions = {
    from: ADMIN_USER_GMAIL,
    to: to,
    subject: "Invitation Url",
    html: htmlTemplate.replace("{{url}}", url),
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return error;
    } else {
      console.log("Email sent:", info.response);
      return info;
    }
  });
};

module.exports = { sendInvite };
