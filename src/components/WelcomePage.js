
import './WelcomePage.css';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
const WelcomePage = () => {
    return (
        
        <div>
        <section className="mainSection">
            <div>
                <span className='welcome-page-rect'></span>
            </div>
            <div className='welcome-page-titles'>
                <span className='header-magicverse-welcome'>MAGICVERSE</span>
                <span>Start Your Magical Journey!</span>
                <NavLink style={{color: 'inherit', textDecoration: 'none' }} to="/magicshop"><button className='magic-shop-btn'>Magic Shop</button></NavLink>
                <NavLink style={{color: 'inherit', textDecoration: 'none' }} to="/magicshop"><button className='magic-shop-btn'>Potion Recipes</button></NavLink>
            </div>
        </section>
        </div>


    )
}
export default WelcomePage;