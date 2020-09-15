import React from 'react';
import './ReviewDetails.css';

const ReviewDetails = (props) => {
    const {name,price,quantity,img,key} = props.product
 // const {handleRemoveBtn} = props.handleRemoveBtn
    return (
        <div className='product-detail'>
            <img src={img} alt=""/>
            <div className = ''>
            <p>{name}</p>
            <p>price{price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick = {()=>props.handleRemoveBtn(key)} className= 'main-btn'>Remove</button>
            </div>
            
        </div>
    );
};

export default ReviewDetails;