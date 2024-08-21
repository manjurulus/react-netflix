import React from "react";
import './Header.css';
import logo from './../Assets/netflix-removebg-preview.png'

function Header(){
    return(
        <div className="header__left">
            <img className="logo" src={logo} alt="Netflix" />
            
        </div>
    );
}

export default Header;