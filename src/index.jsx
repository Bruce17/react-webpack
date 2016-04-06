

var React     = require('react');
var ReactDOM  = require('react-dom');
var Component = require('./Component');

window.onload = () => {
    ReactDOM.render(
        <Component />,
        document.querySelector('#container')
    );
};
