//config.js
// Global variables file
var user = "VascoAmaral";
var passwd = "VascoAmaral9";

module.exports = function () {
    let configs = {
        db: {
            path: 'mongodb://'+user+':'+passwd+'@ds151973.mlab.com:51973/rmsf_project',
            name: 'rmsf_project',
            host: 'ds151973.mlab.com',
            port: 51973,
            options: {
                useNewUrlParser: true
            }
        },
        host: {
            path: 'http://192.168.1.9:3000',
            port: 3000,
            sslPort: 18000
        },
        default: {

        }
    };

    return configs;
};
