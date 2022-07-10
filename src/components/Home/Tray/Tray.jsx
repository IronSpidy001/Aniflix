import React from "react";
import TrayHeading from "./TrayHeading";
import TrayContent from "./TrayContent";
import "./Tray.css";


function Tray(props){
    return(
        <div>
            <TrayHeading title={props.title} />
            <TrayContent content={props.content} />
        </div>
    )
}

export default Tray