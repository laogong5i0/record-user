import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Sider from './sider';
import Nav from './nav';
import Bread from './bread';
import style from './index.module.less';
import { config } from './menu';
import {withRouter} from 'react-router-dom';

const cx = classNames.bind(style);

class Layout extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  state = {
    siderFolded: false,
  };

  handleFad = () => {
    this.setState({
      siderFolded: !this.state.siderFolded,
    });
  };

  render() {
    const { children ,history:{location}} = this.props;
    const { siderFolded } = this.state;
    const {  } = this.context;
    console.log('---33333333333333===>>', this.props);
    console.log('---33333333333333', history, location);
    console.log('---3333ddd33333111111113333333333', location);
    return (
      <div className={cx('layout', { fold: siderFolded })}>
        <Sider siderFolded={siderFolded} location={location} />
        <div className={cx('main')} id="mainContainer">
          <Nav
            siderFolded={siderFolded}
            onFade={this.handleFad}
            location={location}
          />
          <Bread className={cx('bread')} menus={config} location={location} />
          <div className={cx('container')}>
            <div className={cx('content')}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
