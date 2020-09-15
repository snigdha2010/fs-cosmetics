import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className = 'main-header'>
            <a href="/Shop">Shop</a>
            <a href="/review">Review</a> 
            <a href="/inventory">Inventory</a>   
        </div>
    );
};

export default Header;