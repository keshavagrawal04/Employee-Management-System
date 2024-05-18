import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ems, emsLogo } from "../../assets";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [togglePassword, setTogglePassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4}>
            <img src={ems} alt="" className="w-100" />
          </Col>
          <Col lg={4} xl={4} md={6} className="border p-4 py-5 rounded-4">
            <div className="d-flex justify-content-center align-items-center pb-5">
              <img src={emsLogo} alt="ems-logo" style={{ width: "70px" }} />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="false"
                  className="form-control fs-6"
                  id="email"
                />
              </div>
              <div className="mb-3 position-relative">
                <input
                  type={togglePassword ? "text" : "password"}
                  value={password}
                  placeholder="Enter Your Password"
                  autoComplete="false"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control fs-6"
                  id="password"
                />
                <div
                  className="position-absolute eye-icon"
                  onClick={() => {
                    setTogglePassword((prev) => !prev);
                  }}
                >
                  {togglePassword ? <FiEye /> : <FiEyeOff />}
                </div>
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
