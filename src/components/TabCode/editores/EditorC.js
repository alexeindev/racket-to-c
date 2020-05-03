import React, { Component } from 'react'
import MonacoEditor from "@etclabscore/react-monaco-editor";
import { Button } from '@material-ui/core';
import './editor-stryle.scss';


export default class Editor extends Component {
    constructor(props){
        super(props);
    }

    handleEditorDidMount = (editor) => {
 
    }

    handleChange = (ev, value) => {
        //if you want to get de text of efitor
    }

    onSubmit = e => {
        document.getElementById("output2").value = this.props.outs;
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
                            language="c"
                            value={code} 
                            options={options}
                            onChange={this.handleChange}
                            editorDidMount={this.handleEditorDidMount}
                    />
                </div>
                <div>
                    <textarea id = "output2" className = "texts" placeholder="output" disabled/>
                </div>
                <Button variant="outlined" color="primary" onClick = {this.onSubmit}>
                    Run
                </Button>
            </div>
        )
    }
}
