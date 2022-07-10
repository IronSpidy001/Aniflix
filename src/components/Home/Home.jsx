import React from "react";
import Carousel from "./Carousel/Carousel"
import Tray from "./Tray/Tray"
import Trays from "./Trays"


function Home(){
    return(
        <div>
            <Carousel />
            <div style={{padding: "0 3vw 30px 3vw"}}>
            {
                Trays.map(function(section){
                    return(
                        <Tray title={section.title} content={section.content}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home