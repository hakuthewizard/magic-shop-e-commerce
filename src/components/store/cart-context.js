import React from "react";

const CartContext = React.createContext({
    magicitems: [],
    totalAmount:0,
    addMagicItem:(magicitem) => {},
    removeMagicItem: (id)=>{}
})
export default CartContext;