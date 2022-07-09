import React from "react";
import "./Carousel.css";
import CarouselItems from "./CarouselItems.js";
import Carousel from "react-bootstrap/Carousel";

function CustomCarousel() {
  return (
    <div className="background">
      <Carousel className="Carousel" variant="light">
        {CarouselItems.map(function (item) {
          return (
            <Carousel.Item className="CarouselItem" interval={5000}>
              <img
                className="d-block carouselImg"
                src={item.imgSrc}
                alt={item.name}
              />
              <Carousel.Caption className="carouselCaption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
