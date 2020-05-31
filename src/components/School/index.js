import React from "react";
import "./index.css";


function School({ name, year, degree }) {
    return (
        <React.Fragment>
            <div>{name}</div>
            <div>{year}</div>
            <div>{degree}</div>
        </React.Fragment>
    );
}


export default School;