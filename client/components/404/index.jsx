import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Content } = Layout;

import './index.scss';

export default class NullPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Layout>

        <Content className="app">
        <div>page no found~ </div>
          <Link to="/">404
          </Link>
        </Content>

      </Layout>
    );
  }
}

// const ConnectedContainer = connect(state => state)(NullPage);

// export default hot(module)(ConnectedContainer);
