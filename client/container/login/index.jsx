import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import classNames from 'classnames/bind';
import WrappedNormalLoginForm from "../../components/login";
import style from './index.module.less';

const cx = classNames.bind(style);

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount(){
  }
  render(){
    return (
      <Layout className={cx('form')}>
        <WrappedNormalLoginForm></WrappedNormalLoginForm>
      </Layout>
    )
  }
}

const ConnectedContainer = connect(state => state)(Login);

export default hot(module)(ConnectedContainer);