import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useFormik } from "formik";
import { ems, emsLogo } from "../../assets";
import { TextInput, PasswordInput } from "../Inputs";
import { toast } from "react-hot-toast";
import { userLogin } from "../../schemas/userSchema";
import { useLoginMutation } from "../../apis";
import Loader from "../Loader";
import "./style.css";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const [loginUser, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userLogin,
    onSubmit: async (values) => {
      try {
        const { data, error } = await loginUser(values);
        if (error) {
          toast.error(error.data.message);
        } else {
          toast.success(data.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  });

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4}>
            <img src={ems} alt="" className="w-100" />
          </Col>
          <Col
            lg={4}
            xl={4}
            md={6}
            className="border p-4 py-5 rounded-4 position-relative"
          >
            {isLoading ? (
              <>
                <Loader />
              </>
            ) : null}
            <div className="d-flex justify-content-center align-items-center pb-5">
              <img src={emsLogo} alt="ems-logo" style={{ width: "70px" }} />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <TextInput
                  id="email"
                  type="email"
                  formik={formik}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3 position-relative">
                <PasswordInput
                  toggle={togglePassword}
                  setToggle={setTogglePassword}
                  formik={formik}
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="d-flex justify-content-center pt-2">
                <button
                  type="submit"
                  className="w-100 btn text-white border-0 bg-color-secondary"
                >
                  Login
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
