import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './container/pages/login';
import App from './container';

// browserHistory.listen(() => {
//   window.NProgress.start();
//   window.NProgress.done();
// });

export default (
  <Switch>
    <Route exact path="/" component={App}>
    </Route>
    <Route exact path="/login" component={Login} />
    {/* <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/user" component={Users} />
    <Route exact path="/post" component={Posts} />
    <Route exact path="/echarts" component={ECharts} />
    <Route exact path="/highcharts" component={HighCharts} />
    <Route exact path="/recharts" component={Recharts} /> */}
  </Switch>
);
