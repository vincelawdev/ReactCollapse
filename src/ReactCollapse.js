import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/ReactCollapse.css';

class ReactCollapse extends Component {
  render() {
    return (
      <div className={'ReactCollapse'}>
          <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default ReactCollapse;