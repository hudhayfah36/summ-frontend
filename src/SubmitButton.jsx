import React from "react";

const SubmitButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
