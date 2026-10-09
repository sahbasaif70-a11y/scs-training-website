const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contacts
// @desc    Submit Contact Inquiry Form
router.post('/', async (req, res) => {
  try {
    const { fullName, mobile, email, subject, message } = req.body;

    if (!fullName || !mobile || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    const newContact = new Contact({
      fullName,
      mobile,
      email,
      subject,
      message,
    });

    await newContact.save();

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully! We will contact you soon.',
      data: newContact,
    });
  } catch (error) {
    console.error('Error submitting contact inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while submitting inquiry.',
    });
  }
});

// @route   GET /api/contacts
// @desc    Get all contact inquiries
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('Error fetching contact inquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching inquiries.',
    });
  }
});

module.exports = router;
