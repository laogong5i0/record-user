import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Button, Popconfirm } from 'antd';
import queryString from 'query-string';
import Page from 'client/components/page';

class User extends Component {
  constructor(props){
    super(props)
    // console.log('', this.props.location);
  }
  componentDidMount() {
    // this.props.dispatch(actions.dashboard.fetch());
  }
  render(){
    const {user} = this.props;
    // console.log('9999999999', this.props);
    return(
      <Page inner>
        <div>000000</div>
      </Page>
    )
  }
}

// const User = ({ location, history, dispatch, user }) => {
//   location.query = queryString.parse(location.search);
//   console.log('====---3-3--33-', Page);
//   return (
//     // <Page>
//     <div>jeeeeeeeeeeeeeeeeee</div>
//     // </Page>
//   )
// }

// User.propTypes = {
  // user: PropTypes.object,
  // location: PropTypes.object,
  // dispatch: PropTypes.func,
  // loading: PropTypes.object,
// };

export default connect(state => state.user)(User);