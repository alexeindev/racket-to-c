import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import img1 from '../../assets/img/condicionales/racket/condicionales6.JPG';
import img2 from '../../assets/img/condicionales/c/condicionales6.JPG';
import logo from '../../assets/img/images.jpg';
import './css/code.css';
import Navbar from '../../components/Navbar/Navbar';

function setData() {}

export default class codeCompiler extends Component {
  render() {
    return (
      <div className="code">
        <Navbar></Navbar>
        <div className="code-header">
          <img src={logo}></img>
          <div className="code-container">
            <div className="div-container">
              <img src={img1}></img>
            </div>
            <div className="div-container">
              <img src={img2}></img>
            </div>
          </div>
          <div className="button-container">
            <div>
              <Button variant="outlined" color="primary" onClick={setData}>
                Ejecutar Codigo
              </Button>
            </div>
            <div>
              <Button variant="outlined" color="primary" onClick={setData}>
                Comparar Codigos
              </Button>
            </div>
            <div>
              <Button variant="outlined" color="primary" onClick={setData}>
                Ejecutar Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
