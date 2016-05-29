var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var DashboardApp = require('DashboardApp');

// Load foundation
require('style!css!bootstrap/dist/css/bootstrap.min.css')

// Load application styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={DashboardApp}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
