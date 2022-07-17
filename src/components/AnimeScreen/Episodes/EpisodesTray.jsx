import React from "react";
import EpisodesTrayImg from "./EpisodesTrayImg";
import EpisodesTrayText from "./EpisodesTrayText";

function EpisodesTray(props){
    return(
        <div className="scrollable-container">
            {props.episodes.map(function(episode){
                return(
                    <div className="episodesTrayItem">
                        <EpisodesTrayImg imgSrc={episode.image}/>
                        <EpisodesTrayText episodeNum = {episode.episodeNum} title = {episode.title}/>
                    </div>
                )
            })}
        </div>
    )
}

export default EpisodesTray;