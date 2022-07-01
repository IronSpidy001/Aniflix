import React from "react"
import NavbarLogo from "./NavbarLogo"
import NavbarItems from "./NavbarItems"
import NavbarItem from "./NavbarItem"
import Search from "./Search"
import Profile from "./Profile"

function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-section">
            <NavbarLogo />
                {NavbarItems.map(function(item){
                    return(
                            <NavbarItem key={item.key} name={item.name} type={item.type} url={item.url} dropdownItems={item.dropdownItems}/>
                        )
                })}
            </div>
            <div className="nav-section">
                <Search name="search" placeholder="Search"/>
                <Profile />
            </div>
        </div>
    )
}

export default Navbar