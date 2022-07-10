import React from "react";
import TrayItem from "./TrayItem";

function TrayContent(props){
    return(
        <div className="scrollable-container">
            {props.content.map(function(item, index){
                return(
                    <TrayItem key={index} imgSrc={item.imgSrc}/>
                )
            })} 
        </div>
    )
}

export default TrayContent;