import React from 'react';
import './Card.css';

function Card(props) {
  const { name, temp, icon } = props;
  return (
    <div className="card">
      <p>{name}</p>
      <p>{temp + ' ℃'}</p>
      <img src={require(`../../img/${icon}.png`)} alt="" />
    </div>
  );
}

export default Card;
