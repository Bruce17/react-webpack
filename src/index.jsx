var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var getRoutes = require('./routes/routes.js');
var storeManager = require('./store/storeManager.js');
var actions = require('./actions/index.js');

const routes = getRoutes();
const store = storeManager();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('container')
);

setTimeout(function(){
    store.dispatch( actions.startListeningToAuth() );
});
