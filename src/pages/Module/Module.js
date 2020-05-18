import React from 'react';
import './Module.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tab from '../../components/Tab/Tab.jsx';
import Editor1 from '../../components/TabCode/editores/EditorRacket';
import Editor2 from '../../components/TabCode/editores/EditorC';

function Module() {
  return (
    <div className="Container">
      <Navbar></Navbar>
      <div className="Module">
        <h1 className="Module__title">Condicionales</h1>
        <Tab></Tab>
        <div className="Module__content">
          <div className="Module__editor">
            <Editor1 ejemplo={5} module={'ciclos'} />
          </div>
          <button className="compiler__button">Comparar código</button>
          <div className="Module__editor">
            <Editor2 className="compiler" ejemplo={5} module={'ciclos'} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Module;
