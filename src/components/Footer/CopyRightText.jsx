import React from "react"

function CopyRightText(){

    const date = new Date();
    const year = date.getFullYear();
    
    return(
        <div className="copyRightText">
            <p>Copyright © {year}</p>
        </div>
    )
}

export default CopyRightText;