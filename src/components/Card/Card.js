import React, { Component } from 'react';
import './card-style.scss';

class Card extends Component {
  render() {
    return (
      <div className="card text-center overflow ">
        <img className="card-img-top" src={this.props.img} alt="Clases" />
        <div className="card-body text-dark">
          <h4 className="card-title title-align">{this.props.title}</h4>
          <p className="card-text text-secondary">{this.props.description}</p>
          <a href={this.props.page} className="btn btn-outline-primary">
            Iniciar tema
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
