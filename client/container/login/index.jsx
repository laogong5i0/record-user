import { hot } from 'react-hot-loader';
import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Button } from 'antd';
const { Header, Content, Footer } = Layout;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount(){
  }
  render(){
    return (
      <Layout>
        sfffjj
      </Layout>
    )
  }
}

const ConnectedContainer = connect(state => state)(Login);

export default hot(module)(ConnectedContainer);