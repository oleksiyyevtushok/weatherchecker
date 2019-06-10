import React from 'react';
import './Search.css';
import { connect } from 'react-redux';

import { getWeather } from '../../actions/index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  buttonClick = () => {
    const { inputValue } = this.state;
    this.props.getWeather(inputValue);
  };

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="search">
        <div className="form-item">
          <input
            type="text"
            placeholder="&nbsp;"
            value={inputValue}
            onChange={this.updateInputValue}
          />
          <label data-label="Enter your city" />
        </div>
        <button className="button" onClick={this.buttonClick}>
          Find
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.city,
});

export default connect(
  mapStateToProps,
  {
    getWeather,
  },
)(Search);
