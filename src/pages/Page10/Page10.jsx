import React, { Component } from 'react';
import Subscribe from './components/Subscribe';

export default class Page10 extends Component {
  static displayName = 'Page10';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page10-page">
        <Subscribe />
      </div>
    );
  }
}
