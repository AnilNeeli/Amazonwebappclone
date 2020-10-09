import React from 'react'
import {useStateValue} from "./State"
import './Styling/checkout.css';
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from './Subtotal';

function Checkout() {
    const[{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="upblock">
            <img className="checkout__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Aall_jupiter_creatives/Dishwasher/Dishwasher-header-banner-Desktop._CB1198675309_.png" alt="add"></img>
            {basket?.length===0?(
            <div>
                <Subtotal/>

            </div>):
            (  <div>
               <Subtotal/>
                 
            </div>
        )}
        </div>
        {basket?.length===0?(
            <div>
                <h2>Your shopping cart is empty</h2>
                <p>You have no items in your basket.To buy one or more items,Click
                    "Add to basket" is next to item.
                </p>

            </div>):
            (  <div>
                <h2 className="checkout__text">Your items in Cart</h2>
                {basket.map(item=>(
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                ))}
            </div>
        )}
        </div>
        
    )
}

export default Checkout
