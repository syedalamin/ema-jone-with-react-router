import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import RevewItem from '../RevewItem/RevewItem';
import './Order.css'

const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='review-container'>
               {
                cart.map(product => <RevewItem
                    key={product.id}
                    product={product}
                ></RevewItem>)
               }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;