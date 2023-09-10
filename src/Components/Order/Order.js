import React from 'react';
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Order = ({ cart }) => {
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        total = total + product.price * product.quantity;
        quantity = quantity + product.quantity
        shipping = shipping + product.shipping * product.quantity;

    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h1 className='order-title'>Order Details</h1>
            <p>Product Selected: {quantity} Items</p>
            <p>Total Cost: ${total}</p>
            <p>Total Shipping Cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <button className='btn-order'><span className='btn-text'>Clear Cart</span> <FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default Order;