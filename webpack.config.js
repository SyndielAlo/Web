const path = require('path')
    module.exports = {
        mode: 'development',
        entry: __dirname + "/src/index.js",
        output: {
            path: __dirname + "/dist",
            filename: 'bundle.js'
        }
    }