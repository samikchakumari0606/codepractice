import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    return (
        <div>
          
            <img src={logo} />
            <h2>Shooper</h2>
            <ul>
                <li onClick={() => setMenu("shop")}><Link to="/">Shop{menu === "shop" ? <hr /> : <></>}</Link></li>
                <li onClick={() => setMenu("mens")}><Link to="/mens">Mens{menu === "mens" ? <hr /> : <></>}</Link></li>
                <li onClick={() => setMenu("womens")}><Link to="/womens">Women{menu === "womens" ? <hr /> : <></>}</Link></li>
                <li onClick={() => setMenu("kids")}><Link to="/kids">Kids{menu === "kids" ? <hr /> : <></>}</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
