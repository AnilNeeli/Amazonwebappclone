import React from 'react'
import {useStateValue} from "./State"
import './Styling/checkout.css';
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from './Subtotal';
import Grid from '@material-ui/core/Grid'

function Checkout() {
    const[{basket}]=useStateValue();
    return (
        <div>
            <Grid container spacing={3} justify="center"> 
        <Grid item xs={12} md={10}>
            <div className="image">
            <Grid item xs={10} md={6}>
            <img className="checkout__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/Oct/GW/DesktopHero_1500x600._CB402740210_.jpg" alt="add"></img>
            </Grid>
            <Grid item xs={10} md={6}>
            <img className="checkout__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser2/GW/6-Desktop-Hero1x_English_3000x1200n._CB403509617_.jpg" alt="add"></img>
            </Grid>
            </div>
            </Grid>
            <Grid item xs={10} md={2}>
            {basket?.length===0?(
            <div className="Total">
                <Subtotal/>

            </div>):
            (  <div className="Total">
               <Subtotal/>
                 
            </div>
        )}
        </Grid>
        </Grid>
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
