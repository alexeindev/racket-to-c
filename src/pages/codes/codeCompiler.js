import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Ejemplos from '../../components/TabCode/tabcodeexample';
import './css/code.css';

function setData() {}

export default class codeCompiler extends Component {
  render() {
    return (
      <div className="code">
        <Navbar></Navbar>
        <div className="code-header">
          <h2>Condicionales</h2>
          <Ejemplos />
        </div>
      </div>
    );
  }
}
