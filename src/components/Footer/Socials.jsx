import React from "react";
import SocialsLinks from "./SocialsLinks";
import SocialsLink from "./SocialsLink";

function Socials(){
    return(
        <div className="Socials">
            <h3>Connect with us</h3>
            <div className="SocialsLinks">
            {SocialsLinks.map(function(item){
                return(
                    <SocialsLink link={item.link} name={item.name} icon={item.icon}/>
                )
            })}
            </div>
        </div>
    )
}

export default Socials;