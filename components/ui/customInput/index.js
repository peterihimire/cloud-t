import React from "react";

const Input = ({
  innerLabel,
  wrapperClass,
  labelText,
  children,
  id,
  required,
  clicked,
  ...props
}) => {
  return (
    <>
      {labelText && (
        <label htmlFor={id}>
          {labelText}{" "}
          {required && (
            <span
              style={{
                color: "#ff8662",
                marginLeft: "3px",
                verticalAlign: "middle",
              }}
            >
              *
            </span>
          )}
        </label>
      )}

      {innerLabel && (
        <div className={`input-wrapper ${wrapperClass ? wrapperClass : ""}`}>
          <input {...props} id={id} required={required} />
          <label htmlFor={id} onClick={clicked}>
            {children}
          </label>
        </div>
      )}

      {!innerLabel && <input {...props} id={id} required={required} />}
    </>
  );
};

export default Input;
