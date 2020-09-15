import React from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ItemDetail = () => {
    const {productKey} = useParams();
    const itemDetail = fakeData.find(pd=>pd.key === productKey)
    console.log(itemDetail)
    return (
        <div>
            {
                <Product showButton = {false} product = {itemDetail}></Product>
            }
        </div>
    );
};

export default ItemDetail;