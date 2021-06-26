import React from "react";

let AppButton = (props) => {
  const { otherClass, btnValue, onClick, style } = props;

  return (
    <button style={style} onClick={onClick} className={`mybtn ${otherClass}`}>
      {btnValue}
    </button>
  );
};
export default AppButton;
