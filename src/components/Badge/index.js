import React from "react";
import "./index.css";

function Badge({ color = "", children }) {

    const classes = `Badge ${color}`;
    return (
        <React.Fragment>
            <div class={classes}>{children}</div>
            <br />
        </React.Fragment >
    );
}

export default Badge;