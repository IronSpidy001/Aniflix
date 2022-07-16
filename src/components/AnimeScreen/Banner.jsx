import React from "react";

function Banner(props){
    return(
        <div className="banner">
            <div className="bannerText">
                <h1>{props.bannerTitle}</h1>
                <p>{props.bannerText}</p>
            </div>
            <img src={props.bannerImage}/>
        </div>
    )
}

export default Banner;