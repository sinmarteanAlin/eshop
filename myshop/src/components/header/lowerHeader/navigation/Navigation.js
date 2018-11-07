import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav className="navigation-menu">
            <ul>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/shop'>SHOP</NavLink></li>
                <li><NavLink to='/my-acount'>MY ACOUNT</NavLink></li>
                <li><NavLink to='/blog'>BLOG</NavLink></li>
                <li><NavLink to='/contact'>CONTACT US</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;