import React from 'react';

function OnMouseOut() {
    function handleMouseOut() {
        console.log('Mouse tidak di atas gambar');
    }

    return (
        <img src="gambar.jpg" 
            alt="gambar" 
            width="500px" 
            onMouseOut={handleMouseOut} />
    );
}

export default OnMouseOut;