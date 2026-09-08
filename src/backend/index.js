const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Mongoose Model


console.log('MONGO_URI:', process.env.MONGO_URI);

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    course: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Nodemailer Transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, course, message } = req.body;

        const contact = new Contact({ name, email, phone, course, message });
        await contact.save();

        // Send Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: 'New Contact Us Message',
            html: `
        <h2>New Contact Us Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Course:</b> ${course}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Email error:', err);
            }
        });

        res.status(200).json({ success: true, message: 'Form submitted successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
