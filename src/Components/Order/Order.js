import React from 'react';

const Order = ({ cart }) => {
    return (
        <div>
            <h1>order section</h1>
            <p>Product selected: {cart.length}</p>
        </div>
    );
};

export default Order;