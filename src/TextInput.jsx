import React, { useState } from "react";

const Text_dataInput = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-input">
      <label htmlFor="text-input">Text Input:</label>
      <textarea id="text-input" value={text} onChange={handleChange} />
    </div>
  );
};

export default Text_dataInput;
