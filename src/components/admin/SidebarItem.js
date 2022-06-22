import React from 'react'
import {Link} from "react-router-dom";

const NavItem = (props) => {
    return (
        <Link to = {props.target} className ="item" style = {props.style}>
            <i className = {`${props.iconName} icon`}></i>
            {props.label}
        </Link>
    );
};

export default NavItem;
