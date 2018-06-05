import React, { Component } from 'react';
import ContentEditor from './components/ContentEditor';

export default class Page7 extends Component {
  static displayName = 'Page7';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page7-page">
        <ContentEditor />
      </div>
    );
  }
}
