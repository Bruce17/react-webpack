var webpack          = require('webpack');
var UglifyJsPlugin   = webpack.optimize.UglifyJsPlugin;
var env              = process.env.WEBPACK_ENV || 'dev';
var WebpackDevServer = require('webpack-dev-server');
var path             = require('path');

var appName = 'app';
var host    = process.env.IP || '0.0.0.0';
var port    = process.env.PORT || '9000';

var plugins = [], outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({minimize: true}));
    outputFile = '/lib/' + appName + '.min.js';
} else {
    outputFile = '/lib/' + appName + '.js';
}

var config = {
    entry: './src/index.jsx',
    devtool: 'source-map',
    output: {
        path: __dirname + '/public',
        filename: outputFile,
        publicPath: ''
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
    plugins: plugins,
    devServer: {
        port: port,
        contentBase: './public',
        outputPath: './public',
        stats: 'minimal'
    }
};

// i think this shit is outdate
//if (env.trim() === 'dev') {
//    new WebpackDevServer(webpack(config), {
//        contentBase: './public',
//        outputPath: './public',
//        stats: 'minimal',
//        debug: true
//    }).listen(port, host, function (err, result) {
//            if (err) {
//                console.log(err);
//            }
//        });
//    console.log('-------------------------');
//    console.log('Local web server runs at http://' + host + ':' + port);
//    console.log('-------------------------');
//}

module.exports = config;
