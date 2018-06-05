import React, { Component } from 'react';
import DisplayCard from './components/DisplayCard';
import BarLineChart from './components/BarLineChart';

export default class All extends Component {
  static displayName = 'All';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="all-page">
        <DisplayCard />
        <BarLineChart />
      </div>
    );
  }
}
