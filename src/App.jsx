import React, { useState } from "react";
import Text_dataInput from "./TextInput";
import Min_lmax_lInput from "./MinMaxInput";
import SubmitButton from "./SubmitButton";
import Output from "./Output";

const App = () => {
  const [text_data, settext_data] = useState("");
  const [min_l, setmin_l] = useState("");
  const [max_l, setmax_l] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track API call status
  const [error, setError] = useState(null); // Store any API errors

  // Replace with your actual API endpoint URL and any required headers/authentication
  const API_URL = "https://6719-103-152-100-134.ngrok-free.app/meow";

  const handleSubmit = async () => {
    setIsLoading(true); // Set loading state
    setError(null); // Clear any previous errors

    try {
      const response = await fetch(API_URL, {
        method: "POST", // Adjust method based on API requirements (POST, GET, etc.)
        headers: {
          "Content-Type": "application/json", // Set content type for JSON data
        },
        body: JSON.stringify({ text_data, max_l, min_l }), // Send text_data, min_l, max_l in request body
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setOutput(data[0].summary_text); // Update output with API response (assumin_lg "output" field)
    } catch (err) {
      setError(err.message); // Set error message for display
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="App">
      <Text_dataInput text_data={text_data} settext_data={settext_data} />
      <Min_lmax_lInput
        min_l={min_l}
        setmin_l={setmin_l}
        max_l={max_l}
        setmax_l={setmax_l}
      />
      <SubmitButton onClick={handleSubmit} isLoading={isLoading} />
      <Output output={output} error={error} />
    </div>
  );
};

export default App;
