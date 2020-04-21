import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import '../css/code.css';




function setData(){
  var codec = "(define (as) (display \"Hola lulu\" ))" +" (as)";
  document.getElementById('input1').value = codec;

  document.getElementById('output1').value = codec;

}

export default class codeCompiler extends Component {
  render() {
    return (
      <div className="code">
          <header className="code-header">
            <div>
              <h2>Aqui el texto de la ventana</h2>
            </div>
          </header>
          <div className="code-header">
            <div className="code-container">
              <div>
                <textarea className="code-TextArea" id = "input1" readOnly></textarea>
              </div>
              <div>
                <textarea className="code-TextArea" id = "input2" readOnly></textarea> 
              </div>
            </div>
            <div className="code-container">
              <div>
                <textarea className="code-TextArea-2" id = "output1" readOnly></textarea>
              </div>
              <div>
                <textarea className="code-TextArea-2" id = "output2" readOnly></textarea> 
              </div>
            </div>
            <div>
              <Button variant="outlined" color="primary" onClick= { setData } >
                Run Code
              </Button>
            </div>     
          </div>
      </div>
    )
  }
}