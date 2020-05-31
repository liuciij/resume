import React from "react";
import "./index.css";

function Separator({ style }) {
    const styles = { width: `${style}px` };
    return (
        <div class="Relative">
            <hr class="Separator__grey" style={styles} />
            < hr class="Separator__green" />
        </div>
    );
}


export default Separator;