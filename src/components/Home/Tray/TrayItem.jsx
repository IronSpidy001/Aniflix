import React from "react";

function TrayItem(props){
    return(
        <div className="TrayItem">
            <img className="TrayImg" src={props.imgSrc} />
        </div>
    )
}

export default TrayItem;