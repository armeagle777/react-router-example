import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Products = () => {
    return (
        <div className='products-container'>
            <h4>Products</h4>
            <Link to='new'>New</Link>
            <Link to='feautered'>Feautered</Link>
            <Outlet />
        </div>
    );
};

export default Products;
