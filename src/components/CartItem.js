import React from "react";
import './CartItem.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    const totalPrice = `$${(props.amount * props.price).toFixed(2)}`;
    return(
        <li className="cart-list-item">
        <span className="item-image-default">{props.image}</span>
        <h3 className='cart-list-item-title'>{props.name}</h3>
        
        <span className="cart-item-quantity">
        <button className="add-remove-buttons" onClick={props.onRemove}>-</button>
        <span className="cart-item-amount">{props.amount} </span>
        <button className="add-remove-buttons" onClick={props.onAdd}>+</button>
        </span>
        <div className='cart-item-price'>{totalPrice}</div>
  
        </li>
    
    )
}
export default CartItem;