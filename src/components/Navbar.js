import icon from "../images/icon.png"
import React from "react";

export default function Navbar(){
    return (
        <nav>
            <img src={icon} alt="icon" />
            <h3>Memers Lab</h3>
        </nav>
    )
}