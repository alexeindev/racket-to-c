import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="/">
          <img src={logo} class="d-inline-block align-top" alt="" width="30" />{' '}
          Racket a C
        </a>
        <div class="navbar-nav-scroll">
          <ul class="navbar-nav bd-navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link " href="/">
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
