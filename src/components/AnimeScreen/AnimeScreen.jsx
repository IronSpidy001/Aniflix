import React from "react";
import Banner from "./Banner"
import Episodes from "./Episodes/Episodes"
import Reviews from "./Reviews"
import Cast from "./Cast"
import "./AnimeScreen.css"

function AnimeScreen(props){
    return(
        <div className="AnimeScreen">
            <Banner bannerTitle={props.bannerTitle} bannerImage={props.bannerImage} bannerText={props.bannerText}/>
            <Episodes episodes={props.episodes}/>
            <Reviews reviews={props.reviews}/>
            <Cast cast={props.cast}/>
        </div>
    )
}

export default AnimeScreen;