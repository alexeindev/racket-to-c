import React, { Component } from 'react'
import MonacoEditor from "@etclabscore/react-monaco-editor";
import { Button } from '@material-ui/core';
import './editor-stryle.scss';
var request = require('request');

  
export default class Editor extends Component {

    handleEditorDidMount = (editor) => {
 
    }

    handleChange = (ev, value) => {
        //if you want to get de text of efitor
    }

    render() {
        const code = this.props.code;
        const options = {
            selectOnLineNumbers: true,
        };
        return (
            <div>
                <div className="monaco-theme">
                    <MonacoEditor 
                            
                            width="350px" 
                            height="400px" 
                            language="scheme"
                            value={code} 
                            options={options}
                            onChange={this.handleChange}
                            editorDidMount={this.handleEditorDidMount}
                    />
                </div>
                <div>
                    <textarea id = "output" className = "texts" placeholder="output" disabled/>
                </div>
                <Button variant="outlined" color="primary" >
                    Run
                </Button>
            </div>
        )
    }
}
