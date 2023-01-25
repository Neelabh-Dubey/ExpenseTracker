import React from "react";
import ChartBar from "./ChartBar";

import classes from './Chart.module.css';

function Chart(props){

    let months = [];
    for(let i=0;i<12;i++){
        months.push(0);
    }
    let maxValue = 0;
    props.expense.forEach(prepare);

    function prepare (item){
        let str = item.date;
        let e;
        for(let i in str){
            if(str[i]==='/'){
                e=i;
                break;
            }
        }
        let mnth;
        mnth = Number(str.substr(0,e));
        months[mnth]+=item.amt;
        maxValue = Math.max(maxValue,months[mnth]);
    }

    return (
        <div className={classes.chart}>
            {months.map((item,i) => <ChartBar key={Math.round(Math.random()*1000)} maxVal={maxValue} val = {item} month = {i}/>)}
        </div>

    )
}


export default Chart;