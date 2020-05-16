import React, { Component } from 'react'
import MonacoEditor from "@etclabscore/react-monaco-editor";
import { Button } from '@material-ui/core';
import './editor-stryle.scss';
import data from '../../../assets/code/condicionales.json';


export default class Editor extends Component {
    constructor(props){
        super(props);
    }

    ejemplos(){
        var code;
        switch(this.props.ejemplo){
            case 1: code = data[0][this.props.module]['1b']["codigo"];
                break;
            case 2: code = data[0][this.props.module]['2b']["codigo"];
                break;
            case 3: code = data[0][this.props.module]['3b']["codigo"];
                break;
            case 4: code = data[0][this.props.module]['4b']["codigo"];
                break;
            case 5: code = data[0][this.props.module]['5b']["codigo"];
                break;
            case 6: code = data[0][this.props.module]['6b']["codigo"];
                break;                                   
        }
        return code;
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
        const code = this.ejemplos();
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
