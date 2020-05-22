import React, { Component } from 'react';
import MonacoEditor from '@etclabscore/react-monaco-editor';
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
        code = data[0][this.props.module]['1b']['codigo'];
        break;
      case 2:
        code = data[0][this.props.module]['2b']['codigo'];
        break;
      case 3:
        code = data[0][this.props.module]['3b']['codigo'];
        break;
      case 4:
        code = data[0][this.props.module]['4b']['codigo'];
        break;
      case 5:
        code = data[0][this.props.module]['5b']['codigo'];
        break;
      case 6:
        code = data[0][this.props.module]['6b']['codigo'];
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
      case 'ciclos':
        moduls = new Ciclos();
        break;
      case 'expresiones':
        moduls = new Expresiones();
        break;
      case 'condicionales':
        moduls = new Condi();
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
    const code = this.ejemplos();
    const options = {
      selectOnLineNumbers: true,
    };
    return (
      <div className="compiler compiler--left">
        <div className="compiler__editor monaco-theme">
          <MonacoEditor
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
