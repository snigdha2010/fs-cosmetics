import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const price = cart.map(pd=>pd.price);
    const totalPrice = price.reduce((acc,total)=>acc+total,0)
    console.log(totalPrice)
    return (
        <div className='cart-details'>
            <h1>This is Cart</h1>
            <p>Toatal Item: {props.cart.length}</p>
            <p>Total Price:{totalPrice}</p>
            {
                props.children
            }

        </div>
    );
};

export default Cart;