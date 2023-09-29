import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleDelete }) => {
    const { id, name, price, quantity, shipping, img } = product;

    return (
        <div className='review-container'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-text'>
                <div>
                    <h4>{name}</h4>
                    <p><small>Price: {price}</small></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div>
                    <button onClick={() => handleDelete(id)} className='btn-delete'>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ReviewItem;