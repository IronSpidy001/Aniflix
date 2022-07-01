import React from "react"

function DropdownItem(props){
    return(
    <div className="dropdown-item">
        <span><a href={props.url}>{props.name}</a></span>
    </div>
    )
}

export default DropdownItem;