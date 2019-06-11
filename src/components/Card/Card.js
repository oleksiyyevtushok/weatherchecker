import React, { Component } from 'react';
import './Card.css';
import { connect } from 'react-redux';

class Card extends Component {
  unix_timestamp = t => {
    const dt = new Date(t * 1000);
    const hr = dt.getHours();
    const m = '0' + dt.getMinutes();
    const s = '0' + dt.getSeconds();
    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
  };

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
        <div className="cardMain">
          <div className="card">
            <p className="day">
              {days[day.getDay()] + ','}
              <span> {Math.round(data.data.main.temp - 273) + '℃'}</span>
            </p>
            <p className="desc">{data.data.weather[0].description}</p>
            <hr />
            <p className="hp">
              Humidity:
              <span>{' ' + data.data.main.humidity + ' %'}</span>
            </p>
            <p className="hp">
              Pressure:
              <span>{' ' + data.data.main.pressure + ' hpa'}</span>
            </p>
          </div>
          <div className="riceset">
            <p>
              Sunrise: <span>{this.unix_timestamp(data.data.sys.sunrise)}</span>
            </p>
            <p>
              Sunset: <span>{this.unix_timestamp(data.data.sys.sunset)}</span>
            </p>
          </div>
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
