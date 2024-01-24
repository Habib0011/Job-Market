import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header'>
            <h2>JobMarket</h2>
            <div className='active-link'>
            <ActiveLink to="/home">Home</ActiveLink>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
            <ActiveLink to="/applied">Applied job</ActiveLink>
            <ActiveLink to="blog">Blog</ActiveLink>
            </div>
            <button className='btn-header'>Start Appling</button>
        </div>
    );
};

export default Header;