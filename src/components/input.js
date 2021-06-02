import React from "react";

let AppInput = (props) => {
  const { onChange, placeholder, type, min, max, otherClass } = props;
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      min={min}
      max={max}
      className={`inp ${otherClass}`}
    />
  );
};
export default AppInput;
