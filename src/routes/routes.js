'use strict';

var React            = require('react');
var Router           = require('react-router').Router;
var Route            = require('react-router').Route;
var useRouterHistory = require('react-router').useRouterHistory;
var IndexRoute       = require('react-router').IndexRoute;
var createHistory    = require('history').createHistory;
var PageSet1         = require('./PageSet1.js');

module.exports = function () {
    const history = useRouterHistory(createHistory)({ queryKey: false });
    return (
        <Router history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ PageSet1 }/>
                <Route path="/set1" component={ PageSet1 }/>
            </Route>
        </Router>
    );
};
