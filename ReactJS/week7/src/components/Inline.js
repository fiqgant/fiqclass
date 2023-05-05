import React from 'react';

function Inline() {
    const myStyle = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '20px',
        cursor: 'pointer',
    };

    return (
        <>
        <div style={myStyle}>
            <h1>Inline Styling Tipe 1</h1>
        </div>
        
        <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '20px'}}>
            <h1>Inline Styling Tipe 2</h1>
        </div>
        </>
    );
}

export default Inline;