import { getShoppingCart } from "../../utilities/fakedb";

export const Products = async () => {
    const productData = await fetch('products.json');
    const products = await productData.json();

    const savedData = getShoppingCart();
    const initialCart = [];
    for (const id in savedData) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedData[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    return { products, initialCart }
}