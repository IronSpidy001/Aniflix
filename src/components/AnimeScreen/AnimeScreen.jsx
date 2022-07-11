import React from "react";
import Banner from "./Banner"
import Episodes from "./Episodes"
import Reviews from "./Reviews"
import Cast from "./Cast"

function AnimeScreen(props){
    return(
        <div>
            <Banner bannerName={props.bannerName}/>
            <Episodes episodes={props.episodes}/>
            <Reviews reviews={props.reviews}/>
            <Cast cast={props.cast}/>
        </div>
    )
}

export default AnimeScreen;