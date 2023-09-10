import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Order from '../Order/Order';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const getStoredCart = getShoppingCart();
        const savedCard = [];
        for (const id in getStoredCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = getStoredCart[id];
                addedProduct.quantity = quantity;
                console.log(addedProduct);
                savedCard.push(addedProduct);
            }
        }
        setCart(savedCard)
    }, [products])

    let newCart = [];
    const eventAddToCart = (selectedProduct) => {

        // const newCart = [...cart, selectedProduct];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCart = [...rest, selectedProduct];

        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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