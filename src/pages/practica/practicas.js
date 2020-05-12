import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tabs from '../../components/Tabpane/tabpane';
import Editor from '../../components/TabCode/TabCode';
import './css/editor.css';

export default class practicas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Container">
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
                <Editor />
              </div>
              <Tabs></Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
