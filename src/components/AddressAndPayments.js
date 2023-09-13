import './AddressAndPayments.css';
import CartItem from "./CartItem";
import { useState,useContext,useRef } from 'react';
import CartContext from './store/cart-context';


const AddressAndPayments = () => {
    const [warning,setWarning] =useState("");
    const nameRef= useRef();
    const addressLine1Ref = useRef();
    const addressLine2Ref = useRef();
    const paymentLine1Ref = useRef();
    const paymentLine2Ref = useRef();
    const paymentLine3dateRef = useRef();
    const paymentLine3ccvRef = useRef();


    const cartCtx = useContext(CartContext);
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
    const placeOrderHandler = (event) => {
        const wizardFullName = nameRef.current.value;
        const addressLine1= addressLine1Ref.current.value;
        const addressLine2 = addressLine2Ref.current.value;
        const paymentLine1 =  paymentLine1Ref.current.value;
        const paymentLine2= paymentLine2Ref.current.value;
        const paymentLine3date= paymentLine3dateRef.current.value;
        const paymentLine3ccv= paymentLine3ccvRef.current.value;
    
        event.preventDefault();
        if (cartCtx.magicitems.length === 0) {
            setWarning("your cart is empty!")
            setTimeout(() => {
                setWarning("");
            },3000);
        } else if (wizardFullName.length <= 0 || addressLine1.length <= 0  || addressLine2.length <=0 || paymentLine1.length <=0 || paymentLine2.length <=0 || paymentLine3date.length <=0 || paymentLine3ccv.length <=0 ) {
            setWarning("all fields are required")
            setTimeout(() => {
                setWarning("");
            },3000);
        }   else {
            setWarning("loading...")
            setTimeout(() => {
                setWarning("Order Completed!");
                window.location.href = '/welcomepage';
            },5000);
        

        }
     
    }
    return (
        <div>
        <h2 className='addresspageheader'>Checkout</h2>
    <section className="checkout-container">
        <div >

        <div className='personal-info'>
            <span>Your Name</span>
            <input readOnly={true}  type="text" placeholder= "your name"  ref={nameRef}/>
            <span className='address-information'>Address Information</span>
            <input readOnly={true} type="text" placeholder= "Adress Line 1"  ref={addressLine1Ref}/>
            <input  readOnly={true} type="text" placeholder= "Adress Line 2"  ref={addressLine2Ref}/>

    
        </div>

        <div  className='personal-info'>
            <span className='payment-information'>Payment Details</span>
            <input readOnly={true} placeholder= "name on card" type="text" ref={paymentLine1Ref}/>
            <input readOnly={true} placeholder= "card number" type="number" ref={paymentLine2Ref}/>
            <span className='payment-info-ccv-date'><input readOnly={true} type="date" ref={paymentLine3dateRef}/><input readOnly={true} type="number" placeholder= "ccv"  ref={paymentLine3ccvRef}/></span>
            
            <button onClick={placeOrderHandler} className='checkout-button'>Place Order</button>
            {warning  && <p className='warningmessage'>{warning}</p>}
        </div>

        </div>

        <div className='cart-summary'> 
           <span>Cart Summary</span>
           <span className='cart-items-checkout'>{cartItems}</span>
           <span className='cart-items-total'>Total ({totalAmount})</span>
        
          
        </div>
      
    </section>
   
    </div>
    )
}
export default AddressAndPayments;