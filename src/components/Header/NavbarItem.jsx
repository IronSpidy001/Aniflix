import React from "react";

function NavbarItem(props){
    if(props.type === "link"){
        return(
            <div>
                <span><a href={props.url}>{props.name}</a></span>
            </div>
        )
    }else if(props.type === "dropdown"){
        return(
            <div>
                <span>{props.name}</span>
                <button></button>
                {props.dropdownItems.map(function(item){
                    return(<a>{item}</a>)
                })}
            </div>
        )
    }
}

export default NavbarItem;