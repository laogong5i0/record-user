import { hot } from 'react-hot-loader';
import React from 'react';import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { connect } from 'react-redux';
import actions from '../../actions'

// import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './index.less';

class NormalLoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initialValue: {
        name: 'admin',
        password: '123123'
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.dispatch(actions.login.login(values));
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {initialValue} = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <img width="100" height="100" src={logo}></img>
        <Form.Item>
          {getFieldDecorator('name', {
            initialValue: initialValue.name,
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            initialValue: initialValue.password,
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


const ConnectedContainer = connect(state => state)(WrappedNormalLoginForm);

export default hot(module)(ConnectedContainer);
