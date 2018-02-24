import React from 'react';

import Report from "./../../ResultsTable/Table";
import classes from "./Result.css";

const result = (props) => {

    const tableDetails = {
        th: ["Date", "Main", "Weather", "Clouds", "Wind", "Rain"],
        dataTh: ["Date", "Main", "Weather", "Clouds", "Wind", "Rain"],
        sanitize : ['dt_txt','main','weather','clouds','wind','rain']
    }


    return (
        props.error ? <div className={["alert alert-danger text-center", classes.constrained].join(" ")}>{props.error} Please try Again !!</div> : props.data ? <Report data = {props.data} table ={tableDetails}/> :null
    );
}

export default result;