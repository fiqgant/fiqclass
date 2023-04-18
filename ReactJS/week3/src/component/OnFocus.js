import React from 'react';

function OnFocus() {
    function handleFocus() {
        console.log('Input sedang difokuskan');
    }

    return (
        <input type="text" onFocus={handleFocus} />
    );
}

export default OnFocus;