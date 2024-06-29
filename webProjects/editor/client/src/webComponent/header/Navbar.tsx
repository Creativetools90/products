import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <header className="header ">
            <div className="logo">
               <Link to="/" >
               <h2 className="logo textLogo">
                    creativeEdit
                </h2>
               </Link>

            </div>
            <div className="menus">
                <ul className="navMenus">
                   <Link to="/demoCode" >
                   <li className="navLink">
                        <button className="navAction">demo code</button>
                    </li>
                   </Link>
                    <li className="navLink">
                        <button className="navAction">sign in</button>
                    </li>
                    <li className="navLink">
                        <button className="navAction outLinedButton">sign up</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar