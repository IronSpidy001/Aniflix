import React from "react";
import Carousel from "./Carousel/Carousel"
import Tray from "./Tray/Tray"
import Trays from "./Trays"

function Home(){
    return(
        <div>
            <Carousel />
            {
                Trays.map(function(section){
                    <Tray title={section.title}/>
                })
            }
        </div>
    )
}

export default Home