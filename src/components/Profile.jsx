// Neccessary imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Profile = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const navigate = useNavigate();

    // Load user data from localStorage
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
            setName(storedUser.name);
            setEmail(storedUser.email);
            setCurrentPassword(storedUser.password);
        } else {
            navigate("/");
        }
    }, [navigate]);

    // Function to update profile information
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const updatedUser = { ...user, name, email };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Profile updated successfully!");
    };

    // Function to update the password
    const handleUpdatePassword = (e) => {
        e.preventDefault();

        // Check if the entered current password matches the stored password
        if (currentPassword !== user.password) {
            alert("Current password is incorrect!");
            return;
        }

        // Check if the new password and confirm new password match
        if (newPassword !== confirmNewPassword) {
            alert("New passwords do not match!");
            return;
        }

        // Update the password in localStorage
        const updatedUser = { ...user, password: newPassword };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Password updated successfully!");

        // Clear the password fields after update
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    };

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>Profile Page</h2>
            <form onSubmit={handleUpdateProfile}>
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
                    <input type="email" className="form-control" value={email} readOnly />
                </div>
                <div className="mb-3">
                    <label>Current Password:</label>
                    <div className="position-relative">
                        <input
                            type={showCurrentPassword ? "text" : "password"}
                            className="form-control"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Enter current password"
                            required
                        />
                        <i
                            className={`bi ${showCurrentPassword ? "bi-eye-slash" : "bi-eye"} password-toggle-icon`}
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        ></i>
                    </div>
                </div>
                <div className="mb-3">
                    <label>New Password:</label>
                    <div className="position-relative">
                        <input
                            type={showNewPassword ? "text" : "password"}
                            className="form-control"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter new password"
                            required
                        />
                        <i
                            className={`bi ${showNewPassword ? "bi-eye-slash" : "bi-eye"} password-toggle-icon`}
                            onClick={() => setShowNewPassword(!showNewPassword)}
                        ></i>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Confirm New Password:</label>
                    <div className="position-relative">
                        <input
                            type={showConfirmNewPassword ? "text" : "password"}
                            className="form-control"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            placeholder="Confirm new password"
                            required
                        />
                        <i
                            className={`bi ${showConfirmNewPassword ? "bi-eye-slash" : "bi-eye"} password-toggle-icon`}
                            onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                        ></i>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpdatePassword}>
                    Update Details
                </button>
                <button className="btn btn-danger ms-3" onClick={handleLogout}>
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Profile;
