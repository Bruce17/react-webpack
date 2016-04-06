'use strict';
var React = require('react');

module.exports = React.createClass({
    render: function () {
        if (this.props.onRender) {
            this.props.onRender();
        }
        return (
            <p>Hello world</p>
        );
    },
    propTypes: {
        onRender: React.PropTypes.func
    }
});
