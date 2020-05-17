import React, { Component } from 'react';
import './Tab.scss';
import { getElementError } from '@testing-library/react';
import Editor1 from '../TabCode/editores/EditorC';

class Tab extends Component {
  render() {
    return (
      <div className="tab-bar">
        <button className="tab__button" data-for-tab="1" onclick="openTab()">
          <i class="fa fa-sitemap "></i> Ejercicio 1
        </button>
        <button className="tab__button" data-for-tab="2">
          <i class="fa fa-sitemap "></i> Ejercicio 2
        </button>
        <button className="tab__button" data-for-tab="3">
          <i class="fa fa-sitemap "></i> Ejercicio 3
        </button>
        <button className="tab__button" data-for-tab="4">
          <i class="fa fa-sitemap "></i> Ejercicio 4
        </button>
        <button className="tab__button" data-for-tab="5">
          <i class="fa fa-sitemap "></i> Ejercicio 5
        </button>
        <button className="tab__button" data-for-tab="6">
          <i class="fa fa-sitemap"></i> Ejercicio 6
        </button>
        <div>
          <Editor1 ejemplo = {5} module = {'ciclos'}/>
        </div>
      </div>
    );
  }
}

export default Tab;
