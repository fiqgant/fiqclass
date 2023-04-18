import React, { useState } from 'react';

function OnSubmit() {
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Nama yang diisi adalah: ${inputValue}`);
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Masukkan nama:
            <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        </form>
    );
}

export default OnSubmit;
