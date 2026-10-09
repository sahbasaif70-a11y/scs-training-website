const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Admission = require('../models/Admission');

// Ensure uploads/cvs directory exists
const uploadDir = path.join(__dirname, '../uploads/cvs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `cv-${uniqueSuffix}${ext}`);
  },
});

// File Filter (PDF Only)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf' || path.extname(file.originalname).toLowerCase() === '.pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: fileFilter,
});

// @route   POST /api/admissions
// @desc    Submit Admission Request (with optional PDF CV upload)
router.post('/', upload.single('cvFile'), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobile,
      email,
      city,
      cnic,
      gender,
      training,
      duration,
      message,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !mobile || !email || !city || !cnic || !gender || !training || !duration) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields.',
      });
    }

    const newAdmission = new Admission({
      firstName,
      lastName,
      mobile,
      email,
      city,
      cnic,
      gender,
      training,
      duration,
      message,
      cvOriginalName: req.file ? req.file.originalname : null,
      cvFileName: req.file ? req.file.filename : null,
      cvFilePath: req.file ? `/uploads/cvs/${req.file.filename}` : null,
    });

    await newAdmission.save();

    return res.status(201).json({
      success: true,
      message: 'Admission application submitted successfully!',
      data: newAdmission,
    });
  } catch (error) {
    console.error('Error submitting admission:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while submitting admission.',
    });
  }
});

// @route   GET /api/admissions
// @desc    Get all admission requests
router.get('/', async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: admissions.length,
      data: admissions,
    });
  } catch (error) {
    console.error('Error fetching admissions:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching admissions.',
    });
  }
});

module.exports = router;
