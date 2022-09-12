import React from 'react';
import './CartItemCard.css';
import {Link} from 'react';

const CartItemCard = ( { item }) => {
    return (
        
        <div className = 'CartItemCard'>

            <img src = {item.img} alt = 'aa' />

            <div>
                <Link to = {`/product/${item.product}`}>{item.name}</Link>
            </div>

        </div>
    );

};

export default CartItemCard;