import React from 'react';
import './Tab.scss';

export default function Tab({ onClick, index, currentActive }) {
  return (
    <div
      onClick={() => onClick(index)}
      className={`tab__button ${
        currentActive === index && 'tab__button--active'
      }`}
    >
      <i className="fa fa-sitemap "></i> Ejercicio {index}
    </div>
  );
}
