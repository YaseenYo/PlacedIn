import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const style = {margin : 0,position:"fixed",top: 0,width: "100%",zIndex : "1000",background:"whitesmoke"};

const Navbar = ({onBurglerClick,visibility}) => {
    return (
        <div className = "ui secondary pointing menu" style = {style} id = "mynavbar">
            <div className = "item" id = "collapse">
                <i className = "bars icon" onClick = {() => onBurglerClick(!visibility)} ></i>
            </div>
            <Link to = "/movies" className = "item header">Filmy</Link>
            <Link to = "/movies" className = "item">About</Link>
        </div>
    );
};

export default Navbar;
