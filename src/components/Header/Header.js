import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className = 'main-header'>
            <Link to = '/Shop'>Shop</Link>
            <Link to = '/review'>Review</Link>
            <Link to = "inventory">Inventory</Link>
            <Link to = '/shipment'>Shipment</Link>
            <Link to = '/log-in'> LogIn</Link>
        </div>
    );
};

export default Header;