import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import './editor-style.scss';
import data from '../../../assets/code/codigos.json';
import Ciclos from '../../../LogicModel/ciclos';
import Condi from '../../../LogicModel/condicionales';
import Vect from '../../../LogicModel/vectores';
import Expresiones from '../../../LogicModel/expresiones';
const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  ejemplos(ejemplo, module) {
    var code;
    switch (ejemplo) {
      case 1:
        code = data[0][module]['1']['codigo'];
        break;
      case 2:
        code = data[0][module]['2']['codigo'];
        break;
      case 3:
        code = data[0][module]['3']['codigo'];
        break;
      case 4:
        code = data[0][module]['4']['codigo'];
        break;
      case 5:
        code = data[0][module]['5']['codigo'];
        break;
      case 6:
        code = data[0][module]['6']['codigo'];
        break;
    }
    return code;
  }

  handleEditorDidMount = (editor) => {};

  handleChange = (ev, value) => {
    //if you want to get de text of efitor
  };

  onSubmit = (e) => {
    var modul;
    switch (this.props.module) {
      case 'expresiones':
        modul = new Expresiones();
        break;
      case 'secuencia':
        modul = new Vect();
        break;
      case 'condicionales':
        modul = new Condi();
        break;
      case 'ciclos':
        modul = new Ciclos();
        break;
      case 'cadenas':
        modul = new Ciclos();
        break;
      case 'vectores':
        modul = new Vect();
        break;
      case 'matrices':
        modul = new Vect();
        break;
      case 'estructuras':
        modul = new Vect();
        break;
      case 'funciones':
        modul = new Vect();
        break;
      case 'composicion':
        modul = new Vect();
        break;
      case 'procedimientos':
        modul = new Vect();
        break;
      case 'Modo gráfico':
        modul = new Vect();
        break;
    }

    switch (this.props.ejemplo) {
      case 1:
        document.getElementById('output').value = modul.uno();
        break;
      case 2:
        document.getElementById('output').value = modul.dos();
        break;
      case 3:
        document.getElementById('output').value = modul.tres();
        break;
      case 4:
        document.getElementById('output').value = modul.cuatro();
        break;
      case 5:
        document.getElementById('output').value = modul.cinco();
        break;
      case 6:
        document.getElementById('output').value = modul.seis();
        break;
    }
  };

  render() {
    const code = this.ejemplos(this.props.ejemplo, this.props.module);
    const options = {
      selectOnLineNumbers: true,
      readOnly: true,
      minimap: {
        enabled: false,
      },
    };
    return (
      <div className="compiler">
        <div className="compiler__editor monaco-theme">
          <MonacoEditor
            height="400px"
            language="scheme"
            value={code}
            options={options}
            onChange={this.handleChange}
            editorDidMount={this.handleEditorDidMount}
          />
        </div>
        <textarea
          id="output"
          className="compiler__output"
          placeholder="output"
          disabled
        />
        <button className="compiler__button" onClick={this.onSubmit}>
          Ejecutar
        </button>
      </div>
    );
  }
}
