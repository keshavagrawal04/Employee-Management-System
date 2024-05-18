const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      hash: {
        type: String,
      },
      salt: {
        type: String,
      },
    },
    profilePicture: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Manager", "Admin", "Employee"],
      default: "Employee",
    },
    bankDetails: {
      bankName: {
        type: String,
        trim: true,
        required: true,
      },
      branchName: {
        type: String,
        trim: true,
        required: true,
      },
      ifscCode: {
        type: String,
        trim: true,
        uppercase: true,
        required: true,
      },
      accountHolderName: {
        type: String,
        trim: true,
        required: true,
      },
      accountNumber: {
        type: String,
        trim: true,
        required: true,
      },
      postName: {
        type: String,
        trim: true,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
