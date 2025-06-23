const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/sendemail", async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASS,
            },
        });
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: `${process.env.SENDER_EMAIL}, venugopal.burli@masaischool.com`,
            subject: "Test Email from NEM Student",
            text: "This is a testing Mail sent by NEM student, no need to reply.",
        };
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email.");
    }
});

app.listen(PORT, () => {
    console.log("Server Started");
});
