import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card';
import data from '../../assets/data/card-info.json';

function Home() {
  return (
    <div className="Home">
      <div className="Home--header">
        <p className="Home--header__title">Racket to C</p>
      </div>
      <div className="Home--body">
        <div className="Home--body__classes">
          {data.map(function (element) {
            return (
              <Card title={element.title} description={element.description} img={element.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
