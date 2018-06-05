import React, { Component } from 'react';
import SettingsForm from './components/SettingsForm';
import MonacoEditor from './components/MonacoEditor';

export default class Code extends Component {
  static displayName = 'Code';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="code-page">
        <SettingsForm />
        <MonacoEditor />
      </div>
    );
  }
}
