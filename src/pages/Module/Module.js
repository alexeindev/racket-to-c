import React, { useState } from 'react';
import './Module.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tab from '../../components/Tab/Tab.jsx';
import Example from '../../components/Content/Example';

const Module = () => {
  //Declaración de la variable de estado active
  const [active, setActive] = useState(0);

  return (
    <div className="Container">
      <Navbar></Navbar>
      <div className="Module">
        <h1 className="Module__title">Condicionales</h1>
        <Tab></Tab>
      </div>
    </div>
  );
};
export default Module;
