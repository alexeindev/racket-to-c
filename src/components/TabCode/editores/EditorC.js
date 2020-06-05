import React, { Component } from 'react';
import dynamic from "next/dynamic";
import './editor-style.scss';
import data from '../../../assets/code/codigos.json';
import Ciclos from '../../../LogicModel/ciclos';
import Condi from '../../../LogicModel/condicionales';
import Vect from '../../../LogicModel/vectores';
import Expresiones from '../../../LogicModel/expresiones';
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  ejemplos(ejemplo, module) {
    var code;
    switch (ejemplo) {
      case 1:
        code = data[0][module]['1b']['codigo'];
        break;
      case 2:
        code = data[0][module]['2b']['codigo'];
        break;
      case 3:
        code = data[0][module]['3b']['codigo'];
        break;
      case 4:
        code = data[0][module]['4b']['codigo'];
        break;
      case 5:
        code = data[0][module]['5b']['codigo'];
        break;
      case 6:
        code = data[0][module]['6b']['codigo'];
        break;
    }
    return code;
  }

  handleEditorDidMount = (editor) => {};

  handleChange = (ev, value) => {
    //if you want to get de text of efitor
  };

  onSubmit = (e) => {
    var moduls;
    switch (this.props.module) {
      case 'expresiones':
        moduls = new Expresiones();
        break;
      case 'ciclos':
        moduls = new Ciclos();
        break;
      case 'condicionales':
        moduls = new Condi();
        break;
      case 'vectores':
        moduls = new Vect();
        break;
      case 'matrices':
        moduls = new Vect();
        break;
      ///poner un default 
    }

    switch (this.props.ejemplo) {
      case 1:
        document.getElementById('output2').value = moduls.uno();
        break;
      case 2:
        document.getElementById('output2').value = moduls.dos();
        break;
      case 3:
        document.getElementById('output2').value = moduls.tres();
        break;
      case 4:
        document.getElementById('output2').value = moduls.cuatro();
        break;
      case 5:
        document.getElementById('output2').value = moduls.cinco();
        break;
      case 6:
        document.getElementById('output2').value = moduls.seis();
        break;
      ///poner un default
    }
  };

  render() {
    const code = this.ejemplos(this.props.ejemplo, this.props.module);
    const options = {
      selectOnLineNumbers: true,
      readOnly: true,
      minimap: {
        enabled: false
      }
    };
    return (
      <div className="compiler compiler--left">
        <div className="compiler__editor monaco-theme">
          <MonacoEditor
            width="600px"
            height="400px"
            language="c"
            value={code}
            options={options}
            onChange={this.handleChange}
            editorDidMount={this.handleEditorDidMount}
          />
        </div>
        <textarea
          id="output2"
          className="compiler__output texts"
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
