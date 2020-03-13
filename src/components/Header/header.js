import React from 'react';

import download_icon from "./../../img/icons/download.png"
import './header.css'

const Header= () =>{
    return(
    <div className="headerContainer">
        <div>MARKIE</div>
        <div className="headerItemContainer">
            <div>
                <img src={download_icon} alt="icon"
                className="icon"/>
            </div>
            <div>Dark</div>
        </div>
    </div>
    )
}

export default Header;