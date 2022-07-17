import React from "react";
import EpisodesTray from "./EpisodesTray";
import "./episodes.css"

function Episodes(props){
    return(
        <div className="episodes">
            <h1>Episodes</h1>
            <EpisodesTray episodes={props.episodes}/>
        </div>
    )
}

export default Episodes;