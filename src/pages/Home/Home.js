import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card';
import data from '../../assets/data/card-info.json';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <div className="Home--header">
        <p className="Home--header__title">Racket a C</p>
      </div>
      <div className="Home--body">
        <div className="Home--body__classes">
          {data.map(function (element) {
            return (
              <Card
                title={element.title}
                description={element.description}
                img={element.img}
                page={element.page}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
