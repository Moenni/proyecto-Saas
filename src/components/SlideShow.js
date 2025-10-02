import React from 'react';
import Slider from 'react-slick';
import './SlideShow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlideShow() {
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
    };
    return(
        <div className="slideshow">
            <Slider {...settings}>
            <div><img src="/img1.jpeg" alt="Trabajo en Equipo"/></div>
            <div><img src="/img2.jpg" alt="Desarrollo web"/></div>
            <div><img src="/img3.jpg" alt="Testing Profesional"/></div>
            </Slider>
        </div>
    );
}
export default SlideShow;