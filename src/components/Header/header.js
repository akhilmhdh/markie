import React from 'react';

import download_icon from "./../../img/icons/download.png"
import './header.css'

const Header= (props) =>{
    return(
    <div className="headerContainer">
        <div>MARKIE</div>
        <div className="headerItemContainer">
            <div>
                <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(props.text)}`}
                download={`${props.fileName}.md`}>
                <img src={download_icon} alt="icon"
                className="icon"/>
                </a>
            </div>
            <div className="darkModeContainer">
                <input
                 type="checkbox" 
                 name="darkMode" 
                 id="darkMode"
                 onClick={()=>props.toggleTheme()}
                />
                <label htmlFor="darkMode">
                    <div/>
                </label>
            </div>
        </div>
    </div>
    )
}

export default Header;