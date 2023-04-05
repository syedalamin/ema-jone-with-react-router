import React from 'react';
import './RevewItem.css'
const RevewItem = ({ product , handleRemoveFromCart}) => {
    const { img, quantity, id, price, name } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='oragne-text'>${price}</span></p>
                <p>Quantity: <span className='oragne-text'>${quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>D</button>
        </div>
    );
};

export default RevewItem;