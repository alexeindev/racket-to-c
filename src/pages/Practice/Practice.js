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

function Practices(props) {
  //Declaración de la variable de estado active
  const { dat } = props;
  const [active, setActive] = useState(0);
  const [currentActive, setCurrentActive] = useState(1);
  var name = dat.replace(':', '');
  const modul = name;
  return (
    <div className="Container">
      <Navbar mod={modul} />
      <div className="Practice">
        <h1 className="Practice__title">Herramienta de práctica</h1>
        <div className="Practice__content">
          {/* Cambio en las tabs */}
          <Tabs
            setCurrentActive={setCurrentActive}
            currentActive={currentActive}
            direction="row"
            index={3}
            type="Ejercicio"
          />
          <div>{ejercicios(currentActive, modul)}</div>
        </div>
      </div>
    </div>
  );
}

export default class Practice extends Component {
  render() {
    return (
      <div>
        <Practices dat={this.props.match.params.modules} />
      </div>
    );
  }
}
