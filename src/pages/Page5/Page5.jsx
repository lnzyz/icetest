import React, { Component } from 'react';
import Login from './components/Login';

export default class Page5 extends Component {
  static displayName = 'Page5';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page5-page">
        <Login />
      </div>
    );
  }
}
