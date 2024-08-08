import React, { useState } from "react";
import { resetPassword } from "../services/api";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("Password reset email sent");
    } catch (error) {
      console.error("Error resetting password", error);
      alert("Failed to send password reset email");
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
