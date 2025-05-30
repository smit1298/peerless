import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/dashboard/nintendo">Go back to Home</Link>
    </div>
  );
}

export default ErrorPage;
