import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
};

export default Header;