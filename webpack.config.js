var path = require('path');
module.exports = {
    entry: './home',
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
        library: 'home'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
};