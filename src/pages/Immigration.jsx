import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ImmigrationService from '../components/ImmigrationService/ImmigrationService';
class Immigration extends Component {
    render() {
        return (
            <div>
                <Header />
                <ImmigrationService />
            </div>
        )
    }

}

export default Immigration;
