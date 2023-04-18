import React from 'react';

function Button(props) {
    function handleClick() {
        alert(`Helloooo ${props.name}!`);
    }

    return (
        <button onClick={handleClick}>Klik Saya</button>
    );
}

export default Button;