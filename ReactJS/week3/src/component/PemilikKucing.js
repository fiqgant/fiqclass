import React from 'react';

function Kucing (props) {
    return ( 
    <div>
        <p>Nama kucing: {props.nama}</p>
        <p>Warna kucing: {props.warna}</p>
    </div>
    );
}

function PemilikKucing(props) {
    return (
    <div>
        <h1>Pemilik kucing:</h1> 
        <p>Nama: {props.nama}</p> 
        <p>Umur: {props.umur}</p>
        <Kucing nama={props.namaKucing} warna={props.warnaKucing} /> 
    </div>
    );
}


export default PemilikKucing;
