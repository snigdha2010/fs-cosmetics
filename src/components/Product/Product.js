import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const{key,name, seller, price, stock,img} = props.product
    const showButton = props.showButton;
    return (
        <div className='product-detail'>
             <img src={img} alt=""/>
            <div>
                <Link to={`/product/${key}`}><h1>{name}</h1>
                </Link>
                <p>by:{seller}</p>
                <p>price:{price}</p>
                <p>only left:{stock}</p>

                {showButton && <button className = 'main-btn'
                onClick = {()=>props.handleAddToCart(props.product)}
                >add to cart</button>}
            </div>
            
        </div>
    );
};

export default Product;