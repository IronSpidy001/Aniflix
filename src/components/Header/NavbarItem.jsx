import React from "react";
import DropdownMenu from "./DropdownMenu.jsx"
import NavbarItems from "./NavbarItems.js";

function NavbarItem(props){
    if(props.type === "link"){
        return(
            <div className="navbar-item">
                <span><a className="navbarItem" href={props.url}>{props.name}</a></span>
            </div>
        )
    }else if(props.type === "dropdown"){
        return(
            <div className="navbar-item">
                <span><a className="navbarItem" href={props.url}>{props.name}</a></span>
                <DropdownMenu dropdownItems = {props.dropdownItems}/>
            </div>
        )
    }
}

export default NavbarItem;