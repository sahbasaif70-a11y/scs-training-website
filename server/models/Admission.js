const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    city: { type: String, required: true },
    cnic: { type: String, required: true, trim: true },
    gender: { type: String, required: true },
    training: { type: String, required: true },
    duration: { type: String, required: true },
    message: { type: String, default: "" },
    cvOriginalName: { type: String, default: null },
    cvFileName: { type: String, default: null },
    cvFilePath: { type: String, default: null },
    status: {
      type: String,
      enum: ["pending", "reviewed", "contacted", "enrolled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Admission', admissionSchema);
