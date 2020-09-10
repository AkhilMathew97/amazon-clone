import React, { useState } from 'react'
import "./Header.css"

import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "../../StateProvider"
import { auth } from '../../firebase'
import Prime from './Prime' 

function Header() {
    const [{basket, user}] = useStateValue();
    const [open,setOpen] = useState()

    const handlClick = () => {
        setOpen(true);
        
      };
      const isPrimeClose = () =>{
          setOpen(false)
      }
      
    const login =() =>{
        if(user){
            auth.signOut();
        }
    }
    console.log("header: ",open)
    return (
                <nav className="header">
                <Link to="/">
                    <img className="header__logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                </Link>
                <div className="header__search">
                    <input type="type" className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <Link to={!user && "/login"} className="header__link">
                        <div onClick={login} className="header__option">
                            <span className="header__optionLineOne">Hello {user?.email}</span>
                            <span className="header__optionLineTwo">{user ? 'Sign out': 'Sign in' }</span>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Return</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>

                    <Link className="header__link">
                        <div onClick={handlClick} className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                            {open? <Prime isPrime={open} isPrimeClose={isPrimeClose} />:null}
                        </div>
                    </Link>

                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionLineTwo header__basketCount">
                                {basket?.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </nav>
    )
}

export default Header
