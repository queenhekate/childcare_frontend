import React from 'react';
import "./Carousel.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselImage1 from "../../assets/carousel1.jpg"
import carouselImage2 from "../../assets/carousel2.jpg"
import carouselImage3 from "../../assets/carousel3.jpg"
import carouselImage4 from "../../assets/carousel4.jpg"

export default function Carousel() {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        transition: "Slide",
    };
    return (
      <div className="carousel__container">
        <Slider {...settings}>
          <div>
            <img style={{width: "100%"}} src={carouselImage4} />
          </div>
          <div>
            <img style={{width: "100%"}} src={carouselImage3} />
          </div>
          <div>
            <img style={{width: "100%"}} src={carouselImage2} />
          </div>
          <div>
            <img style={{width: "100%"}} src={carouselImage1} />
          </div>
        </Slider>
      </div>
    );
  }