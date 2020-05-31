import React from "react";
import "./index.css";

function Badge({ className = "", children }) {

    const classes = `Badge Level__${className}`;
    return (
        <React.Fragment>
            <div class={classes}>{children}</div>
            <br />
        </React.Fragment >
    );
}

export default Badge;