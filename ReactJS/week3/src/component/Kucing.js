import React from 'react';

function Kucing (props) {
    return ( 
        <div>
            <p>Nama kucing: {props.nama_kucing}</p> 
            <p>Warna kucing: {props.warna_kucing}</p>
        </div>
    );
}

    function IsiKucing() {
    return ( 
    <div>
        <h2>Kucing-kucing lucu:</h2>
        <Kucing nama_kucing = "Kitty" warna_kucing = "Coklat" />
        <Kucing nama_kucing = "Garfield" warna_kucing = "Oranye" />
        <Kucing nama_kucing = "Tom" warna_kucing = "Abu-abu" /> 
    </div>
    );
}

export default IsiKucing;
