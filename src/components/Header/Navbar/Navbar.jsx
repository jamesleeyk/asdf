import React, { Component } from 'react';
import './Navbar.scss';
import Logo from '../../../assets/Logo/Clio-Logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <img src={Logo} alt="" className="nav__logo" />
        <ul className="nav__list">
          <li className="nav__item">Clio Business</li>
          <li className="nav__item">Features</li>
          <li className="nav__item">Lawyer Network</li>
          <li className="nav__item">Resources</li>
        </ul>
        <div className="nav__button-div">
          <button className="nav__loginButton">Login</button>
          <button className="nav__signUpButton">Sign Up</button>
        </div>
      </nav>
    );
  }
}