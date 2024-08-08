import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate para redireccionar
import { register } from "../services/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ email, password });
      if (response.status === 201) {
        setSuccess("Registration successful! You can now log in.");
        setEmail(""); // Limpiar el formulario
        setPassword("");
        setError("");
        // Redirigir al login después del registro exitoso
        navigate("/login");
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error("Registration failed", err);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Register</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default Register;
