import React from "react";
import StudentsChart from "./StudentsChart";
import "./chart.css";

const StudentsChartCard = () => {
    return (
        <div className = "ui card mb-5 student_chart" style = {{width:"500px !important"}}>
            <div className = "content" style = {{background : "#b9efb9",color : "seagreen"}}>
                <h4>Companies Hiring</h4>
            </div>
            <div className = "content" style = {{padding : 0}}>
                <StudentsChart/>
            </div>
        </div>
    );
};

export default StudentsChartCard;