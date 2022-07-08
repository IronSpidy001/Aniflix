import React from "react"
import "./Footer.css"
import CopyRightText from "./CopyRightText"
import Socials from "./Socials"

function Footer() {
    return(
        <div className="Footer"> 
            <CopyRightText />
            <Socials />
        </div>
    )
}

export default Footer;