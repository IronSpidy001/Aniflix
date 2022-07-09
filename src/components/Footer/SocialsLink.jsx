import React from "react"

function SocialsLink(props){

    return(
        <div >
            <a href={props.link}><img className="SocialsLink" src={props.icon} alt= {props.name} /></a>
        </div>
    )
}

export default SocialsLink;