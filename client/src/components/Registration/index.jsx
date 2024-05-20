import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { emsLogo } from "../../assets";
import { useFormik } from "formik";
import { userRegister } from "../../schemas/userSchema";
import { TextInput, PasswordInput } from "../Inputs";
import "./style.css";
import { useParams } from "react-router-dom";

const Registration = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  const params = useParams();
  console.log(params.token);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: 0,
      password: "",
      confirmPassword: "",
      profilePicture: "",
      dateOfBirth: "",
      jobTitle: "",
      role: "",
      bankName: "",
      branchName: "",
      ifscCode: "",
      accountHolderName: "",
      accountNumber: 0,
      postName: "",
    },
    validationSchema: userRegister,
    onChange: async (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center mt-2">
          <Col md={4} className="d-flex justify-content-center">
            <img src={emsLogo} alt="ems-logo" style={{ width: "70px" }} />
          </Col>
        </Row>
        <form className="text-start fw-500" onSubmit={formik.handleSubmit}>
          <Row className="d-flex justify-content-center align-items-center mt-4">
            <Row className="mb-4">
              <p className="fs-4 fw-bold">Personal Information</p>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="name"
                  type="text"
                  formik={formik}
                  placeholder="Enter Your Full Name"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="email"
                  type="email"
                  formik={formik}
                  placeholder="Enter You Email Address"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="phoneNumber"
                  type="number"
                  formik={formik}
                  placeholder="Enter You Phone Number"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="dateOfBirth"
                  type="date"
                  formik={formik}
                  placeholder="Enter Your Date of Birth"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <PasswordInput
                  toggle={togglePassword}
                  setToggle={setTogglePassword}
                  formik={formik}
                  id="password"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <PasswordInput
                  toggle={toggleConfirmPassword}
                  setToggle={setToggleConfirmPassword}
                  formik={formik}
                  id="confirmPassword"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="jobTitle"
                  type="text"
                  formik={formik}
                  placeholder="Enter Your Job Title"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="profilePicture"
                  type="file"
                  formik={formik}
                  placeholder="Enter Your Profile Picture"
                />
              </Col>
            </Row>
            <Row className="mb-4">
              <p className="fs-4 fw-bold">Bank Information</p>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="bankName"
                  type="text"
                  formik={formik}
                  placeholder="Enter Your Bank Name"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="branchName"
                  type="text"
                  formik={formik}
                  placeholder="Enter Bank Branch Name"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="ifscCode"
                  type="text"
                  formik={formik}
                  placeholder="Enter Bank IFSC Code"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="accountHolderName"
                  type="text"
                  formik={formik}
                  placeholder="Enter Account Holder Name"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="accountNumber"
                  type="number"
                  formik={formik}
                  placeholder="Enter Your Account Number"
                />
              </Col>
              <Col xl={4} lg={4} md={6} className="mb-2">
                <TextInput
                  id="postName"
                  type="text"
                  formik={formik}
                  placeholder="Enter Your Post Name"
                />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center pt-2 mb-2">
              <Col md={3}>
                <button
                  type="submit"
                  className="w-100 btn text-white border-0 bg-color-secondary"
                >
                  Register
                </button>
              </Col>
            </Row>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Registration;
