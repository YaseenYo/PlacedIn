import React, {useState} from 'react';
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';
import "./sidebar.css";


const style = {color:"rgb(209 213 219)",padding : "20px"};

const navData = [
    {label : "Home", target : "/home", iconName : "home"},
    {label : "Profile", target : "/profile", iconName : "user plus"},
    {label : "Students", target : "/students", iconName : "users"},
    {label : "Messages", target : "/messages", iconName : "inbox"},
    {label : "Stats", target : "/stats", iconName : "pie chart"},
    {label : "Timeline", target : "/timeline", iconName : "calendar check outline"},
];

const Sidebar = ({onClose,visibility,displaySetting}) => {
    const [dropdown,setDropdown] = useState(false);

    const renderedNavItems = navData.map((item)=>{
        return (
            <SidebarItem {...item} style = {style} key = {item.label}/>
        );
    });

    const dropdownIcon = dropdown ? "down" : "right";

    return (
        <div className = {`${displaySetting} ui visible sidebar inverted vertical menu`} id = "sidebar">
            <div className = "item right floated terminator">
                <i className = "x icon"  onClick = {() => onClose(!visibility)}></i>
            </div>
            <h4 style= {{textAlign : "center", padding : '20px',color:"rgb(209 213 219)",fontSize : "20px"}}>
                <i aria-hidden="true" className ="adn fitted icon"></i> Admin 
            </h4>
            {renderedNavItems}
            <div className ="item" onClick={()=>setDropdown(!dropdown)} style = {{...style,cursor:"pointer"}}>
                <i className =  {`angle ${dropdownIcon} icon`}></i>
                Company Drives
            </div>
            {dropdown ? <Link to = "/createdrive" className ="item" style = {{...style,paddingLeft:"40px",paddingRight:"20px"}}>
                <i className =  "add icon"></i>
                Create Drive
            </Link> : null}
            {dropdown ? <Link to = "/activedrives" className ="item" style = {{...style,paddingLeft:"40px",paddingRight:"20px"}}>
                <i className =  "angellist icon"></i>
                Active Drives
            </Link> : null}
            {dropdown ? <Link to = "/previousdrives" className ="item" style = {{...style,paddingLeft:"40px",paddingRight:"20px"}}>
                <i className =  "history icon"></i>
                Previous Drives
            </Link> : null}
        </div>
    );
};

export default Sidebar;
