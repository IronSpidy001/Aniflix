import React from "react";
import TrayHeading from "./TrayHeading"


function Tray(props){
    return(
        <div>
            <TrayHeading title={props.title} />
        </div>
    )
}

export default Tray