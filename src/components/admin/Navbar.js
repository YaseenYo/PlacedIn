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
            <div className='right menu'>
                <i className = "search icon" style={{margin:"auto",color : "#6b7280"}}></i>
                <i className = "bell icon" style={{margin:"auto",marginLeft : "10px",color : "#6b7280"}}></i>
                <img src="monica.png" className="ui avatar image profile_img"/>
            </div>
        </div>

    );
};

export default Navbar;
