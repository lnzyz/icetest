import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Footer from './components/Footer';

import './UserLayout.scss';

export default class UserLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout className="user-layout" style={styles.container}>
        <div className="header">
          <a href="#" className="meta">
            <span className="title">SKRO</span>
          </a>
          <p className="desc">天路改变中小企业开发理念</p>
        </div>
        {this.props.children}
        <Footer />
      </Layout>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    paddingTop: '100px',
    background: '#f0f2f5',
    backgroundImage:
      'url(https://img.alicdn.com/tfs/TB1kOoAqv1TBuNjy0FjXXajyXXa-600-600.png)',
    backgroundSize: 'contain',
  },
};
