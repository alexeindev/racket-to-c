import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt=""
            width="30"
          />{' '}
          Racket a C
        </a>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link " href="/">
                Inicio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
