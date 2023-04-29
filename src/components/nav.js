import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div>
            <nav className="show-when-desktop">
                <h2>Market</h2>
                <ul>
                    <li><Link className='mainLink' to="#w">Home</Link></li>
                    <li><Link className='mainLink' to="#w">About</Link></li>
                    <li><Link className='mainLink' to="#w">Connect</Link></li>
                    <li><Link className='mainLink' to="allProducts">All-products</Link></li>
                    <li><Link className="login-btn" to="login">login</Link></li>
                </ul>
            </nav>
            <nav className="show-when-mobile">
                <h2>logo</h2>
                <div className="burger-menu" onClick={updateMenu}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
            </nav>

            <div className={menu_class}>
                <div className="links">
                    <ul>
                        <li><Link className='mainLink' to="#w">Home</Link></li>
                        <li><Link className='mainLink' to="#w">About</Link></li>
                        <li><Link className='mainLink' to="#w">Connect</Link></li>
                        <li><Link className='mainLink' to="allProducts">All-products</Link></li>
                    </ul>
                </div>
                <label>
                    <input placeholder="search a product" type="search" />
                    <button type="submit">search</button>
                </label>
            </div>
        </div>
    )
}

export default Navbar