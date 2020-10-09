import React from 'react'
import './Styling/product.css';
import {useStateValue} from "./State"
function Product({id,title,price,rating,image}) {
    const[{basket},dispatch]=useStateValue();
    const addtobasket=()=>{
        dispatch({type:"ADD_TO_BASKET",
                  item:{
                      id,
                      title,
                      price,
                      rating,
                      image
                  }})

    }
    return (
        <div className="Product">
            
            <div>
            <p>{title}</p>
            
            <p className="ProductPrice">
                <small>₹</small>
                <strong>{price}</strong>
                 </p>
                 <div className="Product__rating">
                   {Array(rating).fill().map((_)=>{
                       return<span role="img" aria-label="star">⭐</span>
                   })}
                 
                 </div>
                 
                 <img className="Product__img"src={image} alt={title}></img>
               
                 </div>
                 <button onClick={addtobasket}>Add to basket</button>
                    

            
        </div>
    )
}

export default Product
