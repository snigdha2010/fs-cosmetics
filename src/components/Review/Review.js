import React, { useState, useEffect } from 'react';
import './Review.css';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import Cart from '../Cart/Cart';
import gify from '../../images/giphy.gif';

const Review = () => {

    const [cart, setCart] = useState([]);
    const [placeOrder, setplaceOrder] = useState(false);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey  = Object.keys(savedCart)
        const product = productKey.map(pd=>{
            const getdata = fakeData.find(dt=>dt.key === pd)
            getdata.quantity = savedCart[pd]
            return getdata;
        })
        setCart(product) 
    },[])
console.log(cart);
 
const handlePlaceOrder = ()=>{
    processOrder();
    setplaceOrder(true)
    setCart([])
}

const handleRemoveBtn = (key) => {
    removeFromDatabaseCart(key)
    const other = cart.filter(pd=>pd.key !== key)
    setCart(...other)
    console.log(key)
}


    return (
       
        <div className = 'twin-container'>
            {
              placeOrder && <img src={gify} alt=""/>
            } 
            <div className = 'product-container'>
                {
                   cart.length>0 &&
                   cart.map(pd=><ReviewDetails 
                    key = {pd.key}
                    handleRemoveBtn = {handleRemoveBtn}
                    product = {pd}></ReviewDetails>) 
                }
            </div>
            <div className = 'cart-container'>
                {
                    <Cart cart={cart}>   
                        <button onClick={handlePlaceOrder} className='main-btn'>Place Order</button>
                    </Cart>
                }
            </div>
        </div>
    );
};

export default Review;