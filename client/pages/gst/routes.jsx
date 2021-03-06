import React from 'react';
import { Route, Switch } from 'react-router';
import Users from './routes/user';
import RecipeTemplate from './routes/recipe';
// import Posts from './routes/post';
// import ECharts from './routes/echarts';
// import HighCharts from './routes/highcharts';
// import Recharts from './routes/recharts';

// browserHistory.listen(() => {
//   window.NProgress.start();
//   window.NProgress.done();
// });

export default (
  <Switch>
    <Route exact path="/gst" component={Users} />
    <Route exact path="/recipetemplate" component={RecipeTemplate} />
    {/* <Route exact path="/post" component={Posts} />
    <Route exact path="/echarts" component={ECharts} />
    <Route exact path="/highcharts" component={HighCharts} />
    <Route exact path="/recharts" component={Recharts} /> */}
  </Switch>
);
