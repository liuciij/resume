import React from "react";
import "./index.css";

function Link({ children, img, link }) {

    return (
        // <div className="Bold"><a className="Links" href="#"><img src={img1} alt="img"></img>LINKEDIN/username</a></div>

        <div class="Bold">
            <a class="Links" href={`${link}`} target="_blank">
                <img src={`${img}`} alt="img"></img>
                {children}
            </a>
        </div>
    )
}

export default Link;