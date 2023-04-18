import React from "react";

class DataServer extends React.Component {
    state = {
        earthquakeData: null,
        loading: true
    }
    
    componentDidMount() {
        fetch('https://cuaca-gempa-rest-api.vercel.app/quake')
        .then(response => response.json())
        .then(data => this.setState({ earthquakeData: data, loading: false }));
    }
    
    render() {
        const { earthquakeData, loading } = this.state;
    
        if (loading) {
        return <p>Loading data...</p>
        }
    
        return (
        <div>
            <h2>componentDidMount() melakukan permintaan data (Data Gempa)</h2>
            <p>Tanggal: {earthquakeData.data.tanggal}</p>
            <p>Jam: {earthquakeData.data.jam}</p>
            <p>Koordinat: {earthquakeData.data.coordinates}</p>
            <p>Magnitudo: {earthquakeData.data.magnitude}</p>
            <p>Kedalaman: {earthquakeData.data.kedalaman}</p>
            <p>Wilayah: {earthquakeData.data.wilayah}</p>
            <p>Potensi: {earthquakeData.data.potensi}</p>
            <img src={earthquakeData.data.shakemap} alt="icons" />
        </div>
        )
    }
}

export default DataServer;