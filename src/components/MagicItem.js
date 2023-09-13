import './MagicItem.css';
import MagicItemForm from './MagicItemForm';
import CartContext from './store/cart-context';
import { useContext } from 'react';

const MagicItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    const cartCtx = useContext(CartContext);
    const addToCartHandler = amount => {
        cartCtx.addMagicItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
            image:props.image
        })
    }
    return (
    <li>
        <div className="magic-grid-item">
        <span className="item-image-default">{props.image}</span>
        <h3 className='magic-item-title'>{props.name}</h3>
        <div className='magic-item-description'>{props.description}</div>
        <div className='magic-item-price'>{price}</div>
        <MagicItemForm onAddToCart={addToCartHandler} />

        </div>
    </li>
    )
}
export default MagicItem;