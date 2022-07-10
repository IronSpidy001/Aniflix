import React from "react";
import { useNavigate } from 'react-router-dom';

function TrayItem(props){

    const navigate = useNavigate();

    function handleClick(){
        navigate(props.name);
    }

    return(
        <div className="TrayItem" onClick={handleClick}>
            <img onClick={handleClick} className="TrayImg" src={props.imgSrc} />
            <div className="TrayItemDetails">
                <h1>oaifqjdf</h1>
                <p>ajndawd</p>
            </div>
        </div>
    )
}

export default TrayItem;