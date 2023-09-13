import './CartButton.css';
import React, {useContext} from 'react';
import shoppingcart from './shoppingcart.png';
import { NavLink } from 'react-router-dom';
import CartContext from './store/cart-context';

const CartButton = () => {
   const cartCtx = useContext(CartContext);

   const numberOfCartItems = cartCtx.magicitems.reduce((curNumber,magicitem)=>{
    return curNumber + magicitem.amount;
   },0);
   
return (
    <NavLink  className='header-left' style={{ textDecoration: 'none'}} to="/magicshoppingcart" ><a className='header-left-cart'>CART</a>
   
        <span className='background-circle-cart'>
            <span className='quantity-cart-header'>{numberOfCartItems}</span>
        </span>
    </NavLink>
)
}
export default CartButton;