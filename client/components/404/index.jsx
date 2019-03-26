import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Content } = Layout;
import style from './index.m.less';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);


export default class NullPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Layout>

        <Content className={cx('error')}>
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
