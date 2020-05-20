import React from 'react';
import './Example.scss';
import Editor1 from '../TabCode/editores/EditorRacket';
import Editor2 from '../TabCode/editores/EditorC';

function Example(props) {
  return (
    <div className="example">
      <div className="example__editor">
        <Editor1 ejemplo={props.label} module={'ciclos'} />
      </div>
      <button className="compiler__button">Comparar código</button>
      <div className="example__editor">
        <Editor2 className="compiler" ejemplo={props.label} module={'ciclos'} />
      </div>
    </div>
  );
}

export default Example;
