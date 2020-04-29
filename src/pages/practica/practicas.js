import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import AceEditor from "react-ace";
import logo from '../../assets/img/images.jpg';
import './css/editor.css'
 
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";


export default class practicas extends Component {
    contructor() {
        this.onChange = this.onChange.bind(this);
      }
      onChange(newValue) {
        console.log(newValue);
      }
      render() {
        return (
            <div className = "code-editor">
                <img src={ logo }></img>
                <h3>Herramienta de practica</h3>
                <h5>En está</h5>
                <div className = "editor-container">
                    <div>
                        <AceEditor width = "850px" fontSize="20px" 
                            mode="java" 
                            theme="monokai"
                            onChange={this.onChange}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                        />
                    </div>
                </div>
                <div>
                    <Button variant="outlined" color="primary">
                        Ejecutar Code
                    </Button>
                </div>
            </div>
        );
    }
}
