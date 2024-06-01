import "./style.css";

const Loader = () => {
  return (
    <div className="loader-container position-absolute d-flex justify-content-center align-items-center">
      <div className="loader-overlay"></div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
