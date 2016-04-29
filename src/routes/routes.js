'use strict';

var React            = require('react');
var Router           = require('react-router').Router;
var Route            = require('react-router').Route;
var useRouterHistory = require('react-router').useRouterHistory;
var IndexRoute       = require('react-router').IndexRoute;
var createHistory    = require('history').createHistory;
var Sign         = require('./Sign.js');

module.exports = function () {
    const history = useRouterHistory(createHistory)({ queryKey: false });
    return (
        <Router history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ Sign }/>
                <Route path="/set1" component={ Sign }/>
            </Route>
        </Router>
    );
};
