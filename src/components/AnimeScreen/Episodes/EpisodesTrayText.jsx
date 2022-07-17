import React from "react";

function EpisodesTrayText(props){
    return(
        <div>
            <h3>Episode {props.episodeNum}</h3>
            <h5>{props.title}</h5>
        </div>
    )
}

export default EpisodesTrayText;