const express = require("express");
const nodeMailer = require("nodemailer");
const { password } = require("./constants");

const router = express.Router();

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com", // SMTP server host (Gmail in this example)
  port: 587, // SMTP server port (587 for TLS, 465 for SSL)
  secure: false, // true for 465, false for other ports
  auth: {
    user: "rav.t.jay97@gmail.com", // Your email address
    pass: password, // Your email password or app-specific password
  },
});

router.get("/hello", () => {
  console.log("Hi");
});

router.get("/sendmail", (req, res) => {
  // Verify connection configuration
  transporter.verify((error, success) => {
    if (error) {
      console.error("Error connecting to the SMTP server:", error);
    } else {
      console.log("SMTP server is ready to take our messages:", success);
    }
  });

  const mailOptions = {
    from: "rav.t.jay97@gmail.com", // Sender address
    to: "ravindujayasekara0758681711@gmail.com", // List of recipients
    subject: "Hello from Node.js", // Subject line
    text: "Hello world?", // Plain text body
    html: "<b>Hello world?</b>", // HTML body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error("Error sending email:", error);
    }
    console.log("Email sent successfully:", info.response);
  });

  res.send({ Hello: "Hi" });
});

module.exports = router;
