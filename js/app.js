import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';

let App = React.createClass({
  render() {
    return (
      <nav className="site-nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <RouteHandler />
      </nav>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, function (handler) {
  React.render(<Handler/>, document.body)
});
