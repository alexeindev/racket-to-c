import React from 'react';
import './Tab.scss';
import Example from '../Content/Example';

//import { useState } from 'react';
const { useState } = React;

export default function Tab(props) {
  const [currentActive, setCurretActive] = useState(1);

  return (
    <div className="tab-bar">
      <button onClick={() => setCurretActive(1)} className="tab__button">
        <i className="fa fa-sitemap "></i> Ejercicio 1
      </button>
      <button onClick={() => setCurretActive(2)} className="tab__button">
        <i className="fa fa-sitemap "></i> Ejercicio 2
      </button>
      <button
        onClick={() => setCurretActive(3)}
        className="tab__button"
        data-for-tab="3"
      >
        <i className="fa fa-sitemap "></i> Ejercicio 3
      </button>
      <button
        onClick={() => setCurretActive(4)}
        className="tab__button"
        data-for-tab="4"
      >
        <i className="fa fa-sitemap "></i> Ejercicio 4
      </button>
      <button
        onClick={() => setCurretActive(5)}
        className="tab__button"
        data-for-tab="5"
      >
        <i className="fa fa-sitemap "></i> Ejercicio 5
      </button>
      <button
        onClick={() => setCurretActive(6)}
        className="tab__button"
        data-for-tab="6"
      >
        <i className="fa fa-sitemap"></i> Ejercicio 6
      </button>
      <Example label={currentActive}> </Example>
    </div>
  );
}
