import React from 'react';
import detailsList from '../../assets/Images/details.png';
import testimonial from '../../assets/Images/testimonial.png';
import detailsP1 from '../../assets/Images/details-p1.png';
import video from '../../assets/Images/video.png';
import questions from '../../assets/Images/questions.png';
import './ImmigrationService.scss';

function ImmigrationService() {
    return (
        <div className="immigration-details">
            <h1 className="immigration-details__title">General Information about Immigration Law</h1>
            <img src={detailsList} alt="List of info" className="immigration-details__image"/>
            <img src={testimonial} alt="Testimonial"  className="immigration-details__image img2"/>
            <h2>Why hire an immigration lawyer?</h2>
            <div className="immigration-details__row">
                <div className="immigration-details__column-left">
                    <img src={detailsP1} alt="Details "/>
                </div>
                <div className="immigration-details__column-right">
                    <img src={video} alt="Details video"/>
                    <img src={questions} alt="Details "/>
                </div>
            </div>
        </div>
    )
}

export default ImmigrationService;
