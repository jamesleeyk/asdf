import React from 'react';
import { Link } from 'react-router-dom'
import detailsList from '../../assets/Images/details.png';
import testimonial from '../../assets/Images/testimonial.png';
import detailsP1 from '../../assets/Images/details-p1.png';
import video from '../../assets/Images/video.png';
import questions from '../../assets/Images/questions.png';
import accessability from '../../assets/Images/accessability.png';
import access2 from '../../assets/Images/access2.png';
import './ImmigrationService.scss';

class ImmigrationService extends React.Component{
    state = {
        access: false
    };

    handleClick = (event ) => {
        event.preventDefault();
        // this.setState({access: !this.state.access});
        this.setState({access: true});
    }

    render () {
        // const accessFirstclass = this.state.access ? "display--Now" : "display";
        let first = "display";
        let second = "display-not"
        if(this.state.access) {
            first = "display-not";
            second = "display";
        }

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
                        <Link to="https://fast.wistia.net/embed/iframe/ewaqejla1m?videoFoam=true"><img src={video} alt="Details video"/></Link>
                        <img src={questions} alt="Details "/>
                        <img src={accessability} alt="Accessability" className={first} onClick={this.handleClick}/>
                        <img src={access2} alt="Accessability" className={second}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImmigrationService;
