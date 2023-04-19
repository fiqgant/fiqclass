import React, { useState } from 'react';

function ComplexForm() {
    const [shippingAddress, setShippingAddress] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expDate: '',
        cvv: '',
    });

    const [order, setOrder] = useState({
        items: [],
        total: 0,
    });

    const handleShippingChange = (e) => {
        const value = e.target.value;
        setShippingAddress({
        ...shippingAddress,
        [e.target.name]: value,
        });
    };

    const handlePaymentChange = (e) => {
        const value = e.target.value;
        setPaymentInfo({
        ...paymentInfo,
        [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send data to server or perform other actions
        console.log('Shipping address:', shippingAddress);
        console.log('Payment info:', paymentInfo);
        console.log('Order:', order);
    };

    return (
        <form onSubmit={handleSubmit}>
        <h1>Complex Form</h1>
        <h3>Shipping Address</h3>
        <p>
            Name:
            <input type="text" name="name" value={shippingAddress.name} onChange={handleShippingChange} />
        </p>
        <p>
            Address:
            <input type="text" name="address" value={shippingAddress.address} onChange={handleShippingChange} />
        </p>
        <p>
            City:
            <input type="text" name="city" value={shippingAddress.city} onChange={handleShippingChange} />
        </p>
        <p>
            State:
            <input type="text" name="state" value={shippingAddress.state} onChange={handleShippingChange} />
        </p>
        <p>
            Zip:
            <input type="text" name="zip" value={shippingAddress.zip} onChange={handleShippingChange} />
        </p>

        <h3>Payment Information</h3>
        <p>
            Card Number:
            <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentChange} />
        </p>
        <p>
            Expiration Date:
            <input type="text" name="expDate" value={paymentInfo.expDate} onChange={handlePaymentChange} />
        </p>
        <p>
            CVV:
            <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handlePaymentChange} />
        </p>
        
        <button type="submit">Order</button>
        </form>
    );
}

export default ComplexForm;