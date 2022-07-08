import React from "react"

function SocialsLink(props){
    return(
        <div>
            <a href={props.link}><img src={props.icon} alt= {props.name} /></a>
        </div>
    )
}

export default SocialsLink;