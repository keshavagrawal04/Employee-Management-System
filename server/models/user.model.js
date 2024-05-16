const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
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
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    jobTitle: {
      type: String,
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
      },
      branchName: {
        type: String,
        trim: true,
      },
      ifscCode: {
        type: String,
        trim: true,
        uppercase: true,
      },
      accountHolderName: {
        type: String,
        trim: true,
      },
      accountNumber: {
        type: String,
        trim: true,
      },
      postName: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
