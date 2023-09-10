import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, eventAddToCart } = props;
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-names'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <div className='product-info'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} stars</small></p>
                </div>

            </div>
            <button onClick={() => eventAddToCart(product)} className='btn-cart'>
                <p>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>

        </div >
    );
};

export default Product;