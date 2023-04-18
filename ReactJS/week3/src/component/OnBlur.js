import React from 'react';

function OnBlur() {
    function handleBlur() {
        console.log('Input tidak lagi difokuskan');
    }

    return (
        <input type="text" onBlur={handleBlur} />
    );
}

export default OnBlur;