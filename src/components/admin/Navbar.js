import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const style = {margin : 0,position:"fixed",top: 0,width: "100%",zIndex : "1000",background:"rgb(255 255 255)"};

const Navbar = ({onBurglerClick,visibility}) => {
    return (
        <div className = "ui secondary pointing menu" style = {style} id = "navbar">
            <div className = "item" id = "collapse">
                <i className = "bars icon" onClick = {() => onBurglerClick(!visibility)} ></i>
            </div>
            <h1 className = "header" style={{marginTop:"auto", marginBottom: "auto", marginLeft : "280px",fontFamily:"Brush Script MT"}}>
                PlacedIn
            </h1>
            <div className='right menu'>
                <img src="monica.png" className="ui avatar image profile_img"/>
            </div>
        </div>

    );
};

export default Navbar;
