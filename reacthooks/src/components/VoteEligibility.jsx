import React from "react";
function VoteEligibility({ age }) {
  return (
    <>
      {age >= 18 ? (
        <h2>You are eligible to vote.</h2>
      ) : (
        <h2>You are not eligible to vote.</h2>
      )}
    </>
  );
}

export default VoteEligibility;
