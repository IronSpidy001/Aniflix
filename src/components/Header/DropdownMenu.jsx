import React from "react"
import DropdownItem from "./DropdownItem"

function DropdownMenu(props){
    return(
        <div className="dropdown-menu">
            {props.dropdownItems.map(function(item){
                return(<DropdownItem name={item.name} url={item.url}/>)
            })}
        </div> 
    )
}

export default DropdownMenu