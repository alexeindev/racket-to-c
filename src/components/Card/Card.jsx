import React, { Component } from 'react';
import './card-style.scss';

class Card extends Component {
  getLabelColor(difficulty) {
    switch (difficulty) {
      case 'Principiante':
        return '#8cba51';
      case 'Medio':
        return '#ffa41b';
      case 'Avanzado':
        return '#c9485b';
    }
  }

  render() {
    return (
      <div className="card text-center overflow ">
        <img className="card-img-top" src={this.props.img} alt="Clases" />
        <div className="card-body text-dark">
          <h4 className="card-title title-align">{this.props.title}</h4>
          <div
            className="diff-label"
            style={{
              backgroundColor: this.getLabelColor(this.props.difficulty),
            }}
          >
            {this.props.difficulty}
          </div>
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
