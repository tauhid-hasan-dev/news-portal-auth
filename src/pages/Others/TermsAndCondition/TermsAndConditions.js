import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <p>Here is our terms and conditions</p>
      <p>
        Go back to: <Link to="/register" className="underline text-blue-600"> Register </Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
