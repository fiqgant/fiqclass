import React, { useState } from 'react';

function OnChange() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
        <form>
        <label>
            Masukkan nama:
            <input type="text" 
            value={inputValue} 
            onChange={handleChange} />
        </label>
        <p>Halo, {inputValue}</p>
        </form>
        </div>
    );
}

export default OnChange;