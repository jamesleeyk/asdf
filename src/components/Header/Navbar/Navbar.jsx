import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/Clio-Logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/">
          <img src={Logo} alt="" className="nav__logo" />
        </Link>
        <ul className="nav__list">
          <li className="nav__item">Clio Business</li>
          <li className="nav__item">Features</li>
          <li className="nav__item">Lawyer Network</li>
          <li className="nav__item">Resources</li>
        </ul>
        <div className="nav__button-div">
          <button className="btn__secondary--active">Login</button>
          <button className="btn__primary--active">Sign Up</button>
        </div>
      </nav>
    );
  }
}
