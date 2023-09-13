import CartContext from "./cart-context";
import { useReducer } from "react";


const defaultCartState = {
    magicitems: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedTotalAmount =
        state.totalAmount + action.magicitem.price * action.magicitem.amount;
  
      const existingCartItemIndex = state.magicitems.findIndex(
        (magicitem) => magicitem.id === action.magicitem.id
      );
      const existingCartItem = state.magicitems[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.magicitem.amount,
        };
        updatedItems = [...state.magicitems];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.magicitems.concat(action.magicitem);
      }
  
      return {
        magicitems: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    if (action.type === 'REMOVE') {
      const existingCartItemIndex = state.magicitems.findIndex(
        (magicitem) => magicitem.id === action.id
      );
      const existingItem = state.magicitems[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.magicitems.filter(magicitem => magicitem.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.magicitems];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      return {
        magicitems: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
  
    return defaultCartState;
  };

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    const addMagicItemToCartHandler = magicitem => {
        dispatchCartAction({type:'ADD', magicitem: magicitem})
    };
    
    const removeMagicItemFromCartHandler = id => {;
        dispatchCartAction({type:'REMOVE', id:id})
    }
   const cartContext = { 
    magicitems: cartState.magicitems,
    totalAmount:cartState.totalAmount,
    addMagicItem: addMagicItemToCartHandler,
    removeMagicItem: removeMagicItemFromCartHandler
}
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;