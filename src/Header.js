import React from 'react'
import './Styling/Header.css';
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from  "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./State"
import {auth} from "./firebase"
function Header() {
    const[{basket,user}]=useStateValue();
    const login=()=>{
        auth.signOut();
    }
    return (
        <div>

                    <div className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>
            </Link>
            <div className="header__search">
            <input className="header__searchbox" type="text"></input>
            <SearchIcon className="header__searchicon"/>
            </div>
            <div className="header_Nav">
                <Link to={!user&&"/login"} className="header__links">
                    <div onClick={login} className="header__options">
                        <span className="header__optionlineone">Hello {user?.email}</span>
                        <span className="heade__optionlinetwo">{user ?'Sign Out':'Sign IN'}</span>
                    </div>
                </Link>
                <Link to="/"className="header__links">
                    <div className="header__options">
                        <span className="header__optionlineone">Returns</span>
                        <span className="heade__optionlinetwo">&Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__links">
                    <div className="header__options">
                        <span className="header__optionlineone">Your</span>
                        <span className="heade__optionlinetwo" >Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__links" >
                    <div className="header__optionbasket">
                    <ShoppingBasketIcon/>
                        <span className="heade__optionlinetwo headerbasket_Count">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            </div>
            
        </div>
    )
}

export default Header
