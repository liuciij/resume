import React from "react";
import "./index.css";
import Title from "../Title";

function FooterItem({ title, children }) {
    return (
        <div>
            <Title level="3">{title}</Title>
            {children}
        </div>
    );
}


export default FooterItem;