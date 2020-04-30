import React from 'react';
import './Start.scss';
import Navbar from '../../components/Navbar/Navbar';
import logo from '../../assets/img/logos.png';

function Start() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Start">
        <div></div>
        <div className="Start--info">
          <h3 className="Start--info__title">
            GUÍA DE PROGRAMACIÓN EN LENGAJE C
          </h3>
          <p className="Start--info__descriprion">
            Este sitio web tiene como objetivo ser un instrumento que sirva de
            apoyo a los estudiantes de la Universidad Tecnológica de Pereira
            para el aprendizaje del lenguaje de programación C++ a través de
            conocimientos previos de Scheme, también conocido como Racket.En
            esta herramienta se podrán encontrar variedad de ejemplos con los
            que el estudiante podrá mejorar su nivel de absteacción y obtener el
            conocimiento de una manera práctica.
          </p>
          <h3 className="Start--info__title">INFORMACIÓN ADICIONAL</h3>
          <p className="Start--info__descriprion">
            Este sitio web cuenta con 11 modulos, cada modulo cuenta con
            ejemplos practicos sobre determinados temas, el estudiante es libre
            de escoger a cual modulo quiere ingresar, nuestra recomendación es
            que antes de ingresar a un modulo, visite el modulo previo, para asi
            poder obtener un mejor entendimiento de los temas que va a ver en el
            modulo al que desea entrar.
          </p>
          <a href="/" className="btn btn-outline-primary" position="center">
            ¡Aprender más!
          </a>
        </div>
        <div className="Start--image">
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
}

export default Start;
