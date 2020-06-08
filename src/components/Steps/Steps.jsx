import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import data from '../../assets/code/comparaciones.json';
import exp from '../TabCode/editores/EditorRacket';
import exp2 from '../TabCode/editores/EditorC';
import './Steps.scss';
const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

function Racket(props) {
  return (
    <div className="outline">
      <MonacoEditor
        width="400"
        height="400"
        language="scheme"
        value={props.code}
        options={{
          selectOnLineNumbers: true,
          readOnly: true,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
}

function C(props) {
  return (
    <div className="outline">
      <MonacoEditor
        width="400"
        height="400"
        language="c"
        value={props.code}
        options={{
          selectOnLineNumbers: true,
          readOnly: true,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
}

export default class Steps extends Component {
  render() {
    const mod1 = new exp();
    const mod2 = new exp2();
    return (
      <div className="Compare">
        <Racket code={mod1.ejemplos(1, 'ciclos')}></Racket>
        <div className="Compare__text-area">
          <textarea id="steps" className="texts" disabled />
          <a href="/" className="compiler__button">
            Comparar
          </a>
        </div>
        <C code={mod2.ejemplos(1, 'ciclos')}></C>
      </div>
    );
  }
}
