import React, { useState } from "react";

const Min_lmax_lInput = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleMinChange = (event) => {
    setMin(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMax(event.target.value);
  };

  return (
    <div className="min-max-input">
      <label htmlFor="min">Min Value:</label>
      <input id="min" type="number" value={min} onChange={handleMinChange} />
      <label htmlFor="max">Max Value:</label>
      <input id="max" type="number" value={max} onChange={handleMaxChange} />
    </div>
  );
};

export default Min_lmax_lInput;
