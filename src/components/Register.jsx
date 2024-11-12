// Necessary Imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    // Function to handle registration
    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful");
        navigate("/");
    }

    return (
        <div className="container mt-5">
            <h2>Register Page</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label>Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password:</label>
                    <div className="position-relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i
                            className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} password-toggle-icon`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Confirm Password:</label>
                    <div className="position-relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <i
                            className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"} password-toggle-icon`}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        ></i>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <p className="mt-3">
                    Already have an account? <a href="/">Login</a>
                </p>
            </form>
        </div>
    )
};

export default Register;