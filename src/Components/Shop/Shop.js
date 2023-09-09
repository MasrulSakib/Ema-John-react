import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Order from '../Order/Order';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const eventAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='Shop'>
            <div className="Shop-container">
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            eventAddToCart={eventAddToCart}>
                        </Product>)
                }
            </div>
            <div className="order-container">
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Shop;