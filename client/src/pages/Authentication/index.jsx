import { Container } from "react-bootstrap";
import { Login } from "../../components";
import "./style.css";

const Authentication = () => {
  return (
    <Container
      fluid
      className="authentication-container d-flex justify-content-center align-items-center"
    > 
      <Login />
    </Container>
  );
};

export default Authentication;
