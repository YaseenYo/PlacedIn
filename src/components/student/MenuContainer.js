import React from "react";
import "./menucontainer.css";

const MenuContainer = ({children}) => {
    return (
        <div className = "contentcontainer">
            {children}
        </div>
    );    
};

export default MenuContainer;