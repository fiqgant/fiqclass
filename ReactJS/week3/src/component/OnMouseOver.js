import React from 'react';

function OnMouseOver() {
    function handleMouseOver() {
        console.log('Mouse sedang berada di atas gambar');
    }

    return (
        <img src="gambar.jpg" 
            alt="gambar" 
            width="500px" 
            onMouseOver={handleMouseOver} />
    );
}

export default OnMouseOver;
