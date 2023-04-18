import React from 'react';

function OnClick() {
    function handleClick() {
        alert('Anda telah melakukan klik!');
    }

    return (
        <button onClick={handleClick}>
            Klik disini
        </button>
    );
}

export default OnClick;