import React from "react";

const style = {borderLeftStyle:"solid",borderLeftWidth:"thin",width:"10px",borderLeftColor:"#aeb2b6"};

const Search = () => {
    return (
        <div className = "right item">
                <div className ="ui action input">
                    <input type = "text" placeholder="Search..."/>
                    <div className = "ui button" style = {{width:"10px"}}>
                        <i className = "search icon"/>
                    </div>
                    <div className = "ui button" style = {style}>
                        <i className = "cancel icon"/>
                    </div>
                </div>
        </div>
    );
};

export default Search;