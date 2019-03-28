import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Layout, Menu, Button } from 'antd';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

import style from './index.module.less';
const cx = classNames.bind(style);


class Container extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(actions.greet());
    
  }

  render() {
    const {greeting} = this.props;
    return (
      <Layout className={cx('content')}>
        <Header className={cx('header')}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="app">
          test color
          <div>test reload</div>
          <div className="page">
            <h1>Redux Example</h1>
            <p>Hello, {this.props.greeting}</p>
            <Button type="primary">test</Button>
          </div>
          <Link to="/login">login
          </Link>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

const ConnectedContainer = connect(state => state)(Container);

export default hot(module)(ConnectedContainer);
