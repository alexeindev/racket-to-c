import React, { Component } from 'react';
import { Button } from '@material-ui/core';
var request = require('request');
var code = "(define (as) (display \"Hola lulu\" ))" +" (as)";
import '../css/code.css';


function setData(){
  document.getElementById('input1').value = code;
  var program = {
    script :  code ,
    language: "racket",
    versionIndex: "0",
    clientId: "237cd0dc0f02b9a668c4000460721b20",
    clientSecret:"76777aa762c873f7ae610049fc069bf1f2c1989def4954f4cb5151139587775f"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
      document.getElementById('output1').value = body['output'];
    });
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