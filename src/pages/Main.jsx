import React, { Component } from 'react';
import ServiceTypes from '../components/ServiceTypes/ServiceTypes';
import Header from '../components/Header/Header';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <ServiceTypes />
            </div>
        )
    }
}
