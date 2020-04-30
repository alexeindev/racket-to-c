import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Navbar from '../../components/Navbar/Navbar';
import Tabs from '../../components/Tabpane/tabpane';
import MonacoEditor from "@etclabscore/react-monaco-editor";
import './css/editor.css';


export default class practicas extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      code: '// type your code...',
      activeTab: props.activeTab || 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab
    });
  }

  handleEditorDidMount = (editor) => {
 
  }
  handleChange = (ev, value) => {
 
  }
    
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
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
                <MonacoEditor 
                    width="600px" 
                    height="400px" 
                    language="c"  
                    theme="monokai"
                    value={code} 
                    options={options}
                    onChange={this.handleChange}
                    editorDidMount={this.handleEditorDidMount}
                />
                <div>
                  <textarea id = "output" className = "text-area" placeholder="output" disabled/>
                </div>
                <Button variant="outlined" color="primary">
                  Run
                </Button>
              </div>
              <div className = "tab-sizes">
                <Tabs></Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


