import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='products'>Products</NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='profile'>Profile</NavLink>
            {!user && <Link to='/login'>Login</Link>}
        </nav>
    );
};

export default Navbar;
