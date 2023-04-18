import React from "react";
import axios from 'axios';

class DataUpdate extends React.Component {
    state = {
        data: null,
    };

    componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
        axios.get('https://cuaca-gempa-rest-api.vercel.app/quake')
        .then(response => {
            this.setState({ data: response.data.data });
        })
        .catch(error => {
            console.log(error);
        });
    }
    }

    render() {
    const { data } = this.state;

    return (
        <div>
        <h2>componentDidUpdate untuk mengambil data baru</h2>
        {data ? (
            <div>
            <p>Tanggal: {data.tanggal}</p>
            <p>Jam: {data.jam}</p>
            <p>Magnitude: {data.magnitude}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
    }
    }

export default DataUpdate;