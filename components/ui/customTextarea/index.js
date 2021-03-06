import React from "react";

const Textarea = ({ labelText, children, id, required, clicked, ...props }) => {
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

      <textarea {...props} id={id} required={required}></textarea>
    </>
  );
};

export default Textarea;
