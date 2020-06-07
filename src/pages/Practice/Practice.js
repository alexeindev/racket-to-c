import React, { Component, useState } from 'react';
import './Practice.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tabs from '../../components/Tabs/Tabs.jsx';
import exercises from '../../assets/data/practicas.json';

function ejercicios(ejemplo, module) {
  var ejer;
  switch (ejemplo) {
    case 1:
      ejer = exercises[0][module]['1'];
      break;
    case 2:
      ejer = exercises[0][module]['2'];
      break;
    case 3:
      ejer = exercises[0][module]['3'];
      break;
  }
  return ejer;
}

const Practice = (props) => {
  //Declaración de la variable de estado active
  const [currentActive, setCurrentActive] = useState(2);
  return (
    <div className="Container">
      <Navbar />
      <div className="Practice">
        <h1 className="Practice__title">Herramienta de práctica</h1>
        <div className="Practice__content">
          {/* Cambio en las tabs */}
          <Tabs
            setCurrentActive={setCurrentActive}
            currentActive={currentActive}
            direction="column"
            index={12}
            type="Estructuras"
          />
          <div>{ejercicios(1, 'estructuras')}</div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
