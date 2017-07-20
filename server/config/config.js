var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3000
    },
    production: {
        db: 'mongodb://ychubei:multivision@ds159112.mlab.com:59112/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};