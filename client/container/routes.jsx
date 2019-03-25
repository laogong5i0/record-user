import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/login';
import App from './pages';
// import NullPage from './404';
import NullPage from '../components/404';


// browserHistory.listen(() => {
//   window.NProgress.start();
//   window.NProgress.done();
// });

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    {/* <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/user" component={Users} />
    <Route exact path="/post" component={Posts} />
    <Route exact path="/echarts" component={ECharts} />
    <Route exact path="/highcharts" component={HighCharts} />*/}
    <Route exact path="/*" component={NullPage} /> 
  </Switch>
);
