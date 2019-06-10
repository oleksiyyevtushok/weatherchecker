import React, { Component } from 'react';
import './Card.css';
import { connect } from 'react-redux';

class Card extends Component {
  render() {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day = new Date();
    let { data } = this.props;
    if (data) {
      return (
        <div className="card">
          <p>{days[day.getDay()]}</p>
          {/* <img src={require(`../../img/${days[0].icon}.png`)} alt="" /> */}
          <p>{Math.round(data.data.main.temp - 273)}</p>
          <p>{data.data.weather[0].description}</p>
          <p>{data.data.main.humidity}</p>
          <p>{data.data.main.pressure}</p>
        </div>
      );
    } else {
      return <div className="card" />;
    }
  }
}

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(Card);
