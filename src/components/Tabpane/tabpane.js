import React, { Component } from 'react';
import { /*Button,*/ Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import { Tab, Tabs } from 'react-bootstrap';
import './tab-style.scss';


export default class tabpane extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          activeTab: props.activeTab || 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedTab) {
        this.setState({
          activeTab: selectedTab
        });
    }

    handleChange(){
        const [values, setValue] = this.useState('');
        
        const handleChanges = (event) => {
          setValue(event.target.value);
        };
    
        const states ={
          value: values,
          handle: handleChanges
        };
        return states;
      }

    render() {
        return (
            <Tabs activeKey={this.state.activeTab}  onSelect={this.handleSelect}>
                  <Tab eventKey={1} title="Funciones">
                    
                  </Tab>
                  <Tab eventKey={2} title="Condicionales">
                  <div>
                      <FormControl component = "fieldset">
                        <FormLabel component = "legend"> 
                          <div className = "description">
                            <p>
                              Determinar si un alumno aprueba a reprueba un curso, sabiendo que aprobara<br/>
                              si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso<br/>
                              contrario.<br/><br/>
                              Si las notas son 40, 90 y 20. ¿Cual de las siguientes respuestas corresponde al<br/>
                              resultado?
                            </p>   
                          </div>
                        </FormLabel>
                        <RadioGroup className="radio-container" aria-label="gender" name="gender1" value={this.handleChange.value} onChange={this.handleChange.handle}>
                          <div className="tab-sizes">
                            <FormControlLabel value="1" control={<Radio color = "primary" />} label="Aprobó"/>
                            <FormControlLabel value="2" control={<Radio color = "primary" />} label="Réprobo"/>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div>
                      <FormControl component = "fieldset">
                        <FormLabel component = "legend"> 
                          <div className = "description">
                            <p>
                            <br/><br/>Construir un programa que realice descuentos en base a lo siguiente:<br/><br/>
                            <ul>
                              <li>Si la compra es menor a 500 no hay descuento</li>
                              <li>Si es entre 500 y 1000, 10% de descuento</li>
                              <li>Si es entre 1000 y 2000, 20% de descuento</li>
                              <li>Si es mayor a 2000, 30% de descuento</li>
                            </ul>

                            </p>   
                          </div>
                        </FormLabel>
                      </FormControl>
                    </div>
                  </Tab>
                  <Tab eventKey={3} title="Ciclos">quiz Ciclos</Tab>
                  <Tab eventKey={4} title="Vectors">quiz Vectors</Tab>
                  <Tab eventKey={5} title="Matrices">quiz Matrices</Tab>
                </Tabs>
        )
    }
}
