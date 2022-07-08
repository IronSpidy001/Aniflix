import React from "react";
import SocialsLinks from "./SocialsLinks";
import SocialsLink from "./SocialsLink";

function Socials(){
    return(
        <div className="Socials">
            <h3>Connect with us</h3>
            {SocialsLinks.map(function(item){
                return(
                    <SocialsLink link={item.link} name={item.name} icon={item.icon}/>
                )
            })}
        </div>
    )
}

export default Socials;