var webpack          = require('webpack');
var UglifyJsPlugin   = webpack.optimize.UglifyJsPlugin;
var env              = process.env.DEV_EVN || 'dev';
var WebpackDevServer = require('webpack-dev-server');
var path             = require('path');

var appName = 'app';
var host    = '0.0.0.0';
var port    = '9000';

var plugins = [], outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({minimize: true}));
    outputFile = appName + '.min.js';
} else {
    outputFile = appName + '.js';
}

var config = {
    entry: './src/index.jsx',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        publicPath: __dirname + '/example'
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    },
    //externals: /^[a-z\-0-9]+$/,
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins
};

if (env === 'dev') {
    new WebpackDevServer(webpack(config), {
        contentBase: './example',
        hot: true,
        debug: true
    }).listen(port, host, function (err, result) {
            if (err) {
                console.log(err);
            }
        });
    console.log('-------------------------');
    console.log('Local web server runs at http://' + host + ':' + port);
    console.log('-------------------------');
}

module.exports = config;