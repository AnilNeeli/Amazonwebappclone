import React from 'react'
import "./Styling/subtotal.css"
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./State"
import {getTotalprice} from "./Reducer"
function Subtotal() {
    const[{basket}]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
              renderText={(value)=>(
                  <>
                  <p>Subtotal ({basket.length}) items:<strong>{`${value}`}</strong></p>
                  <small className="subtotal__gift">
                  <input type="checkbox"/>This order contains a gift</small>


                  </>
              )}
            
            
            decimalScale={2} value={getTotalprice(basket)}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"₹"}/>
            <button>procced to checkout</button>
        </div>
    )
}

export default Subtotal
