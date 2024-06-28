import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <header className="header ">
            <div className="logo">
                <h2 className="logo textLogo">
                    creativeEdit
                </h2>

            </div>
            <div className="menus">
                <ul className="navMenus">
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