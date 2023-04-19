import React, { useState } from 'react';

function FormWithState() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With State</h1>
            <p>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </p>
            <p>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </p>
            <p>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </p>
            <p>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </p>
            <button type="submit">Submit</button>
        </form>
    );
    }

    export default FormWithState;