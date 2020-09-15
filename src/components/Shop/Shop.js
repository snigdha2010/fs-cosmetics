import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
   const data = fakeData.slice(0,10);
   const [cart,setCart] = useState([]);


    useEffect(()=>{
      const savedData = getDatabaseCart()
      const productKey = Object.keys(savedData);
      const product = productKey.map(pdt=>{
          const findValue = fakeData.find(pd=>pd.key === pdt)
          findValue.quantity = savedData[pdt]
          return findValue;
         })
         setCart(product)
      
    },[])
    console.log(cart) 

   const handleAddToCart = (product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd=>pd.key === toBeAddedKey)
        let count = 1; 
        let newCart;
        if(sameProduct){
           count = sameProduct.quantity + 1;
           sameProduct.quantity = count
           const other = cart.filter(pd=>pd.key !== toBeAddedKey);
           newCart = [...other, sameProduct]
        } else {
           product.quantity = 1;
            newCart = [...cart,product]
        }
        setCart(newCart)
        addToDatabaseCart(toBeAddedKey,count)
   }

    return (
        <div className='twin-container'>
            <div className ='product-container'>
                {
                    data.map(pd=>
                    <Product key = {pd.key} product ={pd}
                    handleAddToCart={handleAddToCart} 
                    showButton = {true}
                    ></Product>)
                }
            </div>
            <div className ='cart-container'>
                <Cart cart={cart}>
                    <Link to ='/review' >
                    <button  className='main-btn'>Review Cart</button>
                    </Link>
                        
                </Cart>
            </div>  
        </div>
    );
};

export default Shop;