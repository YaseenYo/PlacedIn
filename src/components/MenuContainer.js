import React from "react";
import "./menucontainer.css";

const MenuContainer = ({title,children}) => {
    return (
        <div className = "menucontainer">
            <div className = "ui secondary pointing menu mainmenu">
                <h5 className = "item" style = {{color:"white"}}>{title}</h5>
            </div>
            {children}
        </div>
    );    
};

export default MenuContainer;