import React from "react";
import {VictoryBar,VictoryChart,VictoryAxis,VictoryTheme} from "victory";

const data = [
    {genre : "tcs",count : 62},
    {genre : "infosis",count : 26},
    {genre : "capgemini",count : 55},
    {genre : "accenture",count : 23},
    {genre : "tcs digital",count : 12},
    {genre : "hcl",count : 15}
];

const StudentsChart = () => {
    return (
        <div>
            <VictoryChart domainPadding= {20} theme = {VictoryTheme.material}>
                <VictoryAxis 
                    tickValues = {["tcs","infosis","capgemini","accenture","tcs digital","hcl"]}
                    tickFormat = {["Tcs","Infosis","Capg","Acc","TcsD","Hcl"]}
                />
                <VictoryAxis 
                    dependentAxis
                    tickFormat = {[10,20,30,40,50,60,70]}
                />
                <VictoryBar data = {data} x = "genre" y = "count"/>
            </VictoryChart>   
        </div>
    );
};

export default StudentsChart;