import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import App from './container';
import configureStore from './store';
import reducers from './reducers';
import saga, { run } from './saga';
import routes from './routes';

const Router = __CLIENT__ ? BrowserRouter : StaticRouter;

/**
 * custom view template
 *
 * @export
 * @class View
 * @extends {React.Component}
 */
export default class RouteView extends React.Component {
  // static doctype = '<!DOCTYPE html>';
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static defaultProps = {
    title: 'recode index',
    asset: 'login',
  };
  /**
   * construct store for server side
   */
  static getStore({ctx}) {
    const store = configureStore({
      greeting: 'beidou',
    }, reducers, saga);
    console.log('==================', store);
    store.dispatch(actions.user.fetchSuccess(users));
    return store;
  }

  /**
   *
   * @param {Object} locals server context variables
   * ```
   * {
   *    ctx: egg/koa context
   *    helper: view helper
   *    render: server side renderToString of react or renderToStaticMarkup
   *      if `config.react.static = true`
   *    renderToString
   *    renderToStaticMarkup
   *    request: http request object
   *    {
   *      ...
   *      req,
   *      res,
   *      ...
   *    }
   * }
   * ```
   *
   * @returns {ReactInstance|Array<ReactInstance>}
   */
  static getPartial({ store, ctx }) {
    const props = {};
    if (ctx && ctx.url) {
      props.location = ctx.url;
      props.context = {
        location: {
          pathname: ctx.pathname,
        },
      };
    }

    console.log('j======', store)
    const html = (
      <Provider store={store}>
        <Router {...props}>
          {/* {routes} */}
        </Router>
        {/* <App /> */}

      </Provider>
    );
    return { html };
  }

  render() {
    const { html, state, helper } = this.props;
    console.log('=------JJJ', html);
    return (
      <html>
        <head>
          <title>Beidou example redux</title>

          <link rel="stylesheet" href={helper.asset('nprogress.css')} />
          {/* <link rel="stylesheet" href={helper.asset('manifest.css')} /> */}
          <link rel="stylesheet" href={helper.asset('index.css')} />
          {/* <link rel="stylesheet" href={helper.asset('antd/dist/antd.css')} /> */}
          {/* <link rel="stylesheet" href={helper.asset(`${asset}.css`)} /> */}
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__ = ${state}`,
            }}
          />
          <script src={helper.asset('nprogress.js')} />
          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('index.js')} />
        </body>
      </html>
    );
  }
}

/**
 * client scope, wrapped in __CLIENT__ detect block
 * only run in client side
 */
if (__CLIENT__) {
  const store = configureStore(window.__INITIAL_STATE__);

  console.log('client:======', store)
  const app = (
    <Provider store={store}>
      {/* <App /> */}
      <Router>
        {routes}
      </Router>

    </Provider>
  );

  // run saga
  run();

  // ReactDOM.render(app, document.getElementById('container'));
  ReactDOM.hydrate(app, document.getElementById('container'));
}
