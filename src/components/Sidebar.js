import React from 'react';
import SidebarItem from './SidebarItem';
import "./sidebar.css";

const style = {color:"#3674c1",padding : "20px"};

const navData = [
    {label : "Home", target : "/movies", iconName : "home"},
    {label : "Customers", target : "/customers", iconName : "users"},
    {label : "Add Customer", target : "/customers/register/new", iconName : "user plus"},
    {label : "Movies", target : "/movies", iconName : "home"},
    {label : "Add Movie", target : "/editmovie", iconName : "inbox"},
    {label : "Edit Movie", target : "/moviedetail", iconName : "edit"}
];

const MySidebar = ({onClose,visibility,displaySetting}) => {
    const renderedNavItems = navData.map((item)=>{
        return (
            <SidebarItem {...item} style = {style} key = {item.label}/>
        );
    });

    return (
        <div className = {`${displaySetting} ui visible sidebar inverted vertical menu`} id = "mysidebar">
            <div className = "item right floated terminator">
                <i className = "x icon"  onClick = {() => onClose(!visibility)}></i>
            </div>
            <hr className = "divider"/>
            {renderedNavItems}
        </div>
    );
};

export default MySidebar;
