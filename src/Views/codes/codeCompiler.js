import React from 'react';
import '../css/code.css';

function Codes() {
  return (
      <div className="code">
          <header className="code-header">
            <div>
              <h2>Aqui el texto de la ventana</h2>
            </div>
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
              <button id="cc" href="#" >Soy un botón</button>
            </div>
       
          </header>
      </div>
  );
}

export default Codes;