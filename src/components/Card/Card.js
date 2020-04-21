import React, { Component } from 'react';
import './card-style.scss';
import img1 from '../../assets/img/expresiones2.jpg';

class Card extends Component {
  render() {
    return (
      <div className="card text-center overflow ">
        <img className="card-img-top" src={img1} alt="Clases" />
        <div className="card-body text-dark">
          <h4 className="card-title ">{this.props.title}</h4>
          <p className="card-text text-secondary">{this.props.description}</p>
          <a href="#" className="btn btn-outline-primary">
            Iniciar tema
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
