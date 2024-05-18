import * as yup from "yup";

const userRegister = yup.object().shape({
  name: yup.string().trim().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .number()
    .positive("Phone number must be positive")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  profilePicture: yup.string().required("Profile picture is required"),
  dateOfBirth: yup.date().required("Date of Birth is required"),
  jobTitle: yup.string().required("Job Title is required"),
  role: yup.string().required("Role is required"),
  bankName: yup.string().required("Bank name is required"),
  branchName: yup.string().required("Branch name is required"),
  ifscCode: yup.string().required("IFSC Code is required"),
  accountHolderName: yup.string().required("Account holder name is required"),
  accountNumber: yup
    .number()
    .positive("Account number must be positive")
    .required("Account number is required"),
  postName: yup.string().required("Post name is required"),
});

export { userRegister };
