import React, { useState } from 'react';
import './Module.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tabs from '../../components/Tabs/Tabs.jsx';
import Example from '../../components/Content/Example';

const Module = () => {
  //Declaración de la variable de estado active
  const [active, setActive] = useState(0);
  const [currentActive, setCurrentActive] = useState(1);

  return (
    <div className="Container">
      <Navbar />
      <div className="Module">
        <h1 className="Module__title">Condicionales</h1>
        <Tabs
          setCurrentActive={setCurrentActive}
          currentActive={currentActive}
        />
        <Example label={currentActive} />
      </div>
    </div>
  );
};
export default Module;
