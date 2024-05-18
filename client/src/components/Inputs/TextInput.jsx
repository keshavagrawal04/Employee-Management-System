const TextInput = ({ id, formik, placeholder, type }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={id}
        className="form-control"
        placeholder={placeholder}
        value={formik[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={{
          border: `1.5px solid ${
            formik.touched[id] && formik.errors[id]
              ? "rgb(200, 23, 23)"
              : "#01256033"
          }`,
        }}
      />
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text-danger error">{formik.errors[id]}</div>
      ) : (
        <div className="error2"></div>
      )}
    </div>
  );
};

export default TextInput;
