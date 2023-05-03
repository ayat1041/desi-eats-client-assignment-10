import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signin">Sign up</Link>
            <Link to="/blogs">Blogs</Link>
        </nav>
    );
};

export default NavigationBar;