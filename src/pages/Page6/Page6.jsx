import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class Page6 extends Component {
  static displayName = 'Page6';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page6-page">
        <FilterTable />
      </div>
    );
  }
}
