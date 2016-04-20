
var createStore     = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var rootReducer     = require('../reducers');
var myMiddleware    = require('../middleware/middleware.js');
var thunkMiddleWare = require('redux-thunk').default;
var initialState    = require('./initialState.js');

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleWare,
    myMiddleware
)(createStore);

module.exports = function () {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index.js');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
};

