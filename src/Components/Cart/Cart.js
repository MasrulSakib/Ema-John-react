import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Cart = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleDelete = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

    const handleRemove = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='Shop'>
            <div className="cart">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleDelete={handleDelete}
                    ></ReviewItem>)
                }
            </div>
            <div className="order-container">
                <Order handleRemove={handleRemove} cart={cart}></Order>
            </div>
        </div>
    );
};

export default Cart;