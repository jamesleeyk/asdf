import React, { Component } from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel__slide-1">
            <h1 className="carouse__title">Helping People</h1>
            <h3>We help people find the legal information they need.<br />Let us help you!</h3>
            <Link to="/main" />
          </div>
          <div className="carousel__slide-2">
            <h3>2</h3>
          </div>
          <div className="carousel__slide-3">
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}