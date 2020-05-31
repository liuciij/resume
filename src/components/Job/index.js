import React from "react";
import "./index.css";
import Title from "../Title";

function Job({ children, position, company, year, about }) {
    return (
        <div>
            <Title level="4" className="Text__align">{position}</Title>
            <p className="Text__align">{company}</p>
            <p className="Text__align">{year}</p>
            <p>{about}</p>
            <p>{children}</p>
        </div>


    );
}


export default Job;