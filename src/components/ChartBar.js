import React from "react";
import classes from "./ChartBar.module.css";

function ChartBar(props) {
    let barHeight = '0%';
    barHeight = Math.round((props.val/props.maxVal)*100) + '%';

    let months = [];
    months.push('Jan');
    months.push('Feb');
    months.push('Mar');
    months.push('Apr');
    months.push('May');
    months.push('Jun');
    months.push('Jul');
    months.push('Aug');
    months.push('Sep');
    months.push('Oct');
    months.push('Nov');
    months.push('Dec');

    return (
        <div className={classes.month}>
            <div className={classes.container}>
                <div className={classes.bar} style={{height: barHeight}}></div>
            </div>
            <div className={classes.label}>{months[props.month]}</div>
        </div>
    );
}


export default ChartBar;