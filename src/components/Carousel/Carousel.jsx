import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import nathanAnderson from '../../assets/Images/nathan-anderson.png';
import nassom from '../../assets/Images/nassom.png';
import clioRepresentative from '../../assets/Images/clio-representative.png';
import './Carousel.scss';

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
        <div className="carousel__column-left">
            <h1 className="carousel__title">Helping People</h1>
            <h3 className="carousel__hero-text">We help people find the legal information they need.<br />Let us help you!</h3>
            <div className="btn__cta_yellow"><Link className="btn__cta-text" to="/main">Need Legal Advice ?</Link></div>
        </div>
        <div className="carousel__column-right">
            <Slider {...settings}>
                <div className="carousel__slide-1">
                    <img src={nathanAnderson} className="carousel__img" alt="Needing Lawyer Help"/>
                </div>
                <div className="carousel__slide-2">
                    <img src={nassom} className="carousel__img" alt="Needing Lawyer Help"/>
                </div>
                <div className="carousel__slide-3">
                    <img src={nathanAnderson} className="carousel__img" alt="Needing Lawyer Help"/>
                </div>
            </Slider>
        </div>
        <div className="clio-helpbox">
            <img src={clioRepresentative} alt="Clio Representative"/>
        </div>
      </div>
    );
  }
}