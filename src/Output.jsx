import React from "react";

const Output = ({ output }) => {
  return (
    <div className="output">
      {output ? <p>API Output: {output}</p> : <p>No output yet.</p>}
    </div>
  );
};

export default Output;
