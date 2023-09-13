import React, { useState } from "react";
import './ShoppingCartPage.css';
import { useEffect,useContext } from "react";
import CartContext from './store/cart-context';
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const ShoppingCart = (props) => {
    const cartCtx = useContext(CartContext);
    const [itemsInCart, setItemsInCart] = useState(false);
    useEffect(() => {
        const itemsInCart =localStorage.getItem( cartCtx.magicitems);

        if(itemsInCart === '1') {
            setItemsInCart(true);
        }
    
      }, []);
    
    
    const totalAmount = `$${cartCtx.magicitems.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2)}`;

    const hasItems = cartCtx.magicitems.length>0;
    
    const cartItemRemoveHandler = id => {
    cartCtx.removeMagicItem(id);
  
    }
    const cartItemAddHandler = magicitem => {
        cartCtx.addMagicItem({...magicitem, amount:1});

        
    }
    const cartItems = (
        <ul className="shopping-cart-grid-item">
        {cartCtx.magicitems.map((magicitem) => {
            return (
             <CartItem 
             key={magicitem.id}
             name={magicitem.name}
             image={magicitem.image}
             amount={magicitem.amount}
             price={magicitem.price}
             onRemove={cartItemRemoveHandler.bind(null,magicitem.id)}
             onAdd = {cartItemAddHandler.bind(null,magicitem)}
             />
             )
        })}
    </ul>
    )
return(
    <div className="shopping-cart-main">
       <section className="shopping-cart-grid-container">
        <span className="shopping-cart-titles">
        <h1>My Shopping Cart</h1>
        <h3>QUANTITY</h3>
        <h3 className="price-shopping-cart-h3">PRICE</h3>
        
        </span>
        
        {cartItems}
       
        <span className="shopping-cart-total-and-complete">
            <span>Total ({totalAmount})</span>
            <NavLink style={{ all: 'unset' }} to="/addressandpaymentinfo" >{hasItems && <button className='complete-order-btn'>Complete Order</button>}</NavLink>
        </span>
        </section> 
    </div>
)
}
export default ShoppingCart;