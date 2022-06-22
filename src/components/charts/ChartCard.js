import React from "react";
import Chart from "./chart";

const ChartCard = () => {
    return (
        <div className = "ui card" style = {{margin: "20px"}}>
            <div className = "content" style = {{background : "#b9efb9",color : "seagreen"}}>
                <h4>Movie Genres</h4>
            </div>
            <div className = "content" style = {{padding : 0}}>
                <Chart/>
            </div>
            <div className = "extra content" style = {{textAlign : "center",background:"#f1f6f7"}}>
                <div className = "description">
                    Wanna add a new Movie ? Head over to the add movie form 
                </div>
                <div className = "ui button small primary" style = {{margin:"10px"}}>
                    Add New Movie
                </div>
            </div>
        </div>
    );
};

export default ChartCard;