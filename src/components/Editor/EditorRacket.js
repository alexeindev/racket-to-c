import React, { Component } from 'react'
import MonacoEditor from "@etclabscore/react-monaco-editor";

export default class Editor extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          code: '// type your code...'
        };
    }

    handleEditorDidMount = (editor) => {
 
    }
    handleChange = (ev, value) => {
   
    }
    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
        };
        return (
            <MonacoEditor 
                      width="600px" 
                      height="400px" 
                      language="scheme"
                      value={code} 
                      options={options}
                      onChange={this.handleChange}
                      editorDidMount={this.handleEditorDidMount}
            />
        )
    }
}
