import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({ toggle, setToggle, formik, id, placeholder }) => {
  return (
    <div className="position-relative">
      <input
        type={toggle ? "text" : "password"}
        id={id}
        name={id}
        value={formik[id]}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={{
          border: `1.5px solid ${
            formik.touched[id] && formik.errors[id]
              ? "rgb(200, 23, 23)"
              : "#01256033"
          }`,
        }}
        className="form-control"
      />
      <div
        className="position-absolute eye-icon"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {toggle ? <FiEye /> : <FiEyeOff />}
      </div>
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text-danger error">{formik.errors[id]}</div>
      ) : (
        <div className="error2"></div>
      )}
    </div>
  );
};

export default PasswordInput;
