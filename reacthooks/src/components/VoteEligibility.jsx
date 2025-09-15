import React, { useState } from "react";

function VoteEligibility() {
  const [age, setAge] = useState("");
  const [eligible, setEligible] = useState(null);

  const checkEligibility = () => {
    setEligible(age >= 18);
  };

  return (
    <>
      <h1>Vote Eligibility Checker</h1>
      <input
        type="number"
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <button onClick={checkEligibility}>Check Eligibility</button>
      {eligible !== null && (
        <h2>{eligible ? "You are eligible to vote." : "You are not eligible to vote."}</h2>
      )}
    </>
  );
}

export default VoteEligibility;
