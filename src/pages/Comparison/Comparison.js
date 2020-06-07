import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Steps from '../../components/Steps/Steps.jsx';

export default class Comparsion extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar></Navbar>
        <Steps></Steps>
      </div>
    );
  }
}
