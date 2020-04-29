import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import AceEditor from 'react-ace';
import Navbar from '../../components/Navbar/Navbar';
import './css/editor.css';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';

export default class practicas extends Component {
  contructor() {
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue) {
    console.log(newValue);
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="practice-container">
          <div className="information">
            <h1>Herramienta de práctica</h1>
            <div className="description">
              <p>
                Te presentamos el espacio de práctica. Aquí podras probar código
                y resolver problemas práctipos para reforzar lo aprendido en los
                módulos ¡Esfuérzate al máximo!
              </p>
            </div>
          </div>
          <div className="code-editor">
            <div className="editor-container">
              <div>
                <AceEditor
                  width="45rem"
                  fontSize="20px"
                  mode="java"
                  theme="monokai"
                  onChange={this.onChange}
                  name="UNIQUE_ID_OF_DIV"
                  editorProps={{ $blockScrolling: true }}
                />
                <Button variant="outlined" color="primary">
                  Ejecutar Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
