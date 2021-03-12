import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import christina from '../../assets/Images/christina.png';
import scott from '../../assets/Images/scott.png';

export default class ServiceTypes extends Component {
    render() {
        const serviceTypes = [ 
            {
                name: 'Need Information',
                image: christina
            },
            {
                name: 'Looking for a Lawyer',
                image: scott
            },
        ]; 
        return (
            <div className="services">
                {
                    serviceTypes.map(service => {
                        return (
                             <div className="service" key={service.name}>
                                <img src={service.image} alt=""/>
                                <Link to="/law-types" >{service.name}</Link>
                            </div>
                        )
                    })
                }    
            </div>
        )
    }
}
