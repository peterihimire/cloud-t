import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

const SearchInput = ({
  innerLabel,
  labelText,
  children,
  id,
  required,
  clicked,
  cancel,
  wrapperClass,
  ...props
}) => {
  const [showCancel, setShowCancel] = useState(false);

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
        <div
          className={`input-wrapper search-input-wrapper ${
            wrapperClass ? wrapperClass : ""
          } ${showCancel ? "show-cancel-btn" : ""}`}
        >
          <input
            {...props}
            id={id}
            required={required}
            className="search-input"
            onInput={(e) => {
              if (e.target.value.length > 0) {
                setShowCancel(true);
              } else {
                setShowCancel(false);
              }
            }}
          />
          <div className="search-cancel" onClick={cancel}>
            {/* <i className="fal fa-times"></i> */}
            <CloseOutlined />
          </div>
          <label htmlFor={id} onClick={clicked}>
            {children}
          </label>
        </div>
      )}

      {!innerLabel && <input {...props} id={id} required={required} />}
    </>
  );
};

export default SearchInput;
