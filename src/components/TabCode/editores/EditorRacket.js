import React, { Component } from 'react';
import MonacoEditor from '@etclabscore/react-monaco-editor';
import { Button } from '@material-ui/core';
import './editor-stryle.scss';
import data from '../../../assets/code/codigos.json';
import Ciclos from '../../../LogicModel/ciclos';
import Condi from '../../../LogicModel/condicionales';
import Expresiones from '../../../LogicModel/expresiones';

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  ejemplos() {
    var code;
    switch (this.props.ejemplo) {
      case 1:
        code = data[0][this.props.module]['1']['codigo'];
        break;
      case 2:
        code = data[0][this.props.module]['2']['codigo'];
        break;
      case 3:
        code = data[0][this.props.module]['3']['codigo'];
        break;
      case 4:
        code = data[0][this.props.module]['4']['codigo'];
        break;
      case 5:
        code = data[0][this.props.module]['5']['codigo'];
        break;
      case 6:
        code = data[0][this.props.module]['6']['codigo'];
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
      case 'ciclos':
          modul = new Ciclos();
          break;
      case 'expresiones':
          modul = new Expresiones();
          break;
      case 'condicionales':
          modul = new Condi();
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
    const code = this.ejemplos();
    const options = {
      selectOnLineNumbers: true,
    };
    return (
      <div className="compiler">
        <div className="compiler__editor monaco-theme">
          <MonacoEditor
            width="100%"
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
