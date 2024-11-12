// Necessary imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Function to handle login
    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Check if user exists and credentials match
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("loggedIn", true);
            alert("Login successful!");
            navigate("/profile");
        } else {
            alert("Invalid email or password!");
        }
    }

    return (
        <div className="container mt-5">
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
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
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className="mt-3">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>
        </div>
    )
}


export default Login;