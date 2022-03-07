import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="group">
    <input
      data-testid="input"
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        data-testid="label"
        className={`${value?.length > 0 ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
