import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink className={({isActive})=>isActive?'active':undefined} 
            to="/home">Home</NavLink >
            <NavLink  to="/about">About</NavLink>
            <NavLink  to="/friends">Friends</NavLink>
            <NavLink  to="/contact">Contact</NavLink>
            <NavLink  to="/products">Products</NavLink>
            
        </nav>
    );
};

export default Header;