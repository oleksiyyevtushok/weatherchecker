import React from 'react';
import './Header.css';

import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { city } = this.props;
    return (
      <div className="header">
        <img src={require('../../img/logo.png')} alt="" />
        <p>
          {!city ? 'Enter your ' : 'Weather in '}{' '}
          <span>{!city ? 'city' : city}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.currCity,
});

export default connect(mapStateToProps)(Header);
