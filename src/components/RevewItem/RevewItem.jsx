import React from 'react';
import './RevewItem.css'
const RevewItem = ({product}) => {
    const {img, quantity, id, price, name} = product;
    return (
        <div className='review-item'>
           <img src={img} alt="" />
        </div>
    );
};

export default RevewItem;