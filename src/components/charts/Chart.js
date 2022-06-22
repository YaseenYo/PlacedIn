import React from "react";
import {VictoryBar,VictoryChart,VictoryAxis,VictoryTheme} from "victory";

const data = [
    {genre : "comedy",count : 4},
    {genre : "drama",count : 3},
    {genre : "action",count : 7},
    {genre : "horror",count : 5}
];

const Chart = () => {
    return (
        <div>
            <VictoryChart domainPadding= {20} theme = {VictoryTheme.material}>
                <VictoryAxis 
                    tickValues = {["comedy","drama","action","horror"]}
                    tickFormat = {["Comedy","Drama","Action","Horror"]}
                />
                <VictoryAxis 
                    dependentAxis
                    tickFormat = {[2,4,6,8]}
                />
                <VictoryBar data = {data} x = "genre" y = "count"/>
            </VictoryChart>   
        </div>
    );
};

export default Chart;