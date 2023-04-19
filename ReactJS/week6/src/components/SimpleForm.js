import React, { useState } from 'react';

function SimpleForm() {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello, ${name}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1>Simple Form</h1>
        <label>
            Name:{' '}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        {' '}
        <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleForm;