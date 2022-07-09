import React from "react";
import TrayHeading from "./TrayHeading";
import "./Tray.css";


function Tray(props){
    return(
        <div className="tray">
            <TrayHeading title={props.title} />
        </div>
    )
}

export default Tray