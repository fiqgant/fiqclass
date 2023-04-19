import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!formData.fullName.trim()) {
            errors.fullName = "Nama lengkap harus diisi";
        }

        if (!formData.email.trim()) {
            errors.email = "Email harus diisi";
            } else if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
            ) {
            errors.email = "Email tidak valid";
        }

        if (!formData.password.trim()) {
            errors.password = "Password harus diisi";
            } else if (formData.password.trim().length < 8) {
            errors.password = "Password minimal 8 karakter";
        }

        if (!formData.confirmPassword.trim()) {
            errors.confirmPassword = "Konfirmasi password harus diisi";
            } else if (formData.password.trim() !== formData.confirmPassword.trim()) {
            errors.confirmPassword = "Konfirmasi password tidak cocok";
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
        console.log("Data pengguna yang valid:", formData);
        } else {
        setErrors(errors);
        }
    };

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1>Validation</h1>
        <div>
            <p htmlFor="fullName">Nama Lengkap</p>
            <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            />
            {errors.fullName && <span>{errors.fullName}</span>}
        </div>
        <div>
            <p htmlFor="email">Email</p>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
            <p htmlFor="password">Password</p>
            <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
            <p htmlFor="confirmPassword">Konfirmasi Password</p>
            <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Daftar</button>
        </form>
    );
};

export default RegistrationForm;
