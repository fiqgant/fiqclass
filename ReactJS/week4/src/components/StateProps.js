import React, { Component } from 'react';

class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
        items: [],
        total: 0
        };
    }

    addItem = (item) => {
    const newItems = [...this.state.items, item];
    const newTotal = this.state.total + item.price;
    this.setState({
        items: newItems,
        total: newTotal
        });
    }

    render() {
        return (
            <div>
            <h2>Keranjang Belanja</h2>
            <ul>
                {this.state.items.map((item, index) => (
                <li key={index}>{item.name}: Rp. {item.price}</li>
                ))}
            </ul>
            <p>Total: Rp. {this.state.total}</p>
            <button onClick={() => this.addItem({ name: "Produk A", price: 100000 })}>Tambah Produk "A"</button>
            <button onClick={() => this.addItem({ name: "Produk B", price: 120000 })}>Tambah Produk "B"</button>
            </div>
        );
    }
}

export default StateProps;
