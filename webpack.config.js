const path = require('path');
module.exports = {
    entry: './src/magicBall.js',
    output: {
        filename: 'theBall.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
