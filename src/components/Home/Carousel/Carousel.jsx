import React from "react";
import "./Carousel.css";
import CarouselItems from "./CarouselItems.js";
import Carousel from "react-bootstrap/Carousel";

function CustomCarousel() {
  return (
    <div>
      <Carousel>
        {CarouselItems.map(function (item) {
          return (
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={item.imgSrc}
                alt={item.name}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
