import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Navbar from '../../components/Navbar/Navbar';
import Tabs from '../../components/Tabpane/tabpane';
import Editor from '../../components/Editor/EditorC';
import './css/editor.css';


export default class practicas extends Component {
  constructor(props) {
    super(props); 
  }
    
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="practice-container">
          <div className="information">
            <h1>Herramienta de práctica</h1>
            <div>
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
                <div className="monaco-theme">
                  <Editor/>
                </div>
                <div>
                  <textarea id = "output" className = "text-area" placeholder="output" disabled/>
                </div>
                <Button variant="outlined" color="primary">
                  Run
                </Button>
              </div>
                <Tabs></Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


