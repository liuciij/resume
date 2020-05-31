import React from "react";
import "./index.css";

import Title from "../Title";
import Separator from "../Separator";

function ContentBlock({ children, title, className }) {
    const classes = `${className}`;

    return (
        <div className={classes}>
            <Title level="3">{title}</Title>
            {children}
        </div>
    );
}

export default ContentBlock;