import React, { Component } from 'react';
import days from '../days.js';
import axios from 'axios';

import Card from '../Card/Card';
class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: days,
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=Kiev&APPID=05064d4e6bb8d9b3a232a8ed69a63329',
      )
      .then(res => console.log(res))
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let { days } = this.state;
    return (
      <div className="cardList">
        {days.map(card => (
          <Card
            key={card.name}
            name={card.name}
            icon={card.icon}
            temp={card.temp}
          />
        ))}
      </div>
    );
  }
}

export default CardsList;
