import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  /*   getLabelColor(difficulty) {
    switch (difficulty) {
      case 'Principiante':
        return '#8cba51';
      case 'Medio':
        return '#ffa41b';
      case 'Avanzado':
        return '#c9485b';
    }
  }
 */
  render() {
    return (
      <div className="Card">
        <img className="Card__img" src={this.props.img} alt="Clases" />
        <div className="Card__text">
          <h4 className="Card__text--title">{this.props.title}</h4>
          {/* <div
            className="diff-label"
            style={{
              backgroundColor: this.getLabelColor(this.props.difficulty),
            }}
          >
            {this.props.difficulty}
          </div> */}
          <p className="Card__text--description">{this.props.description}</p>
        </div>
        <div className="Card__link">
          <a href={this.props.page}>Iniciar tema</a>
        </div>
      </div>
    );
  }
}

export default Card;
