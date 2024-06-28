import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../header/Navbar';
const Layout = () => {
    return (
        <main className="mainContainer  " >
                <Navbar/>
                <Outlet/>
        </main>
    )
}

export default Layout