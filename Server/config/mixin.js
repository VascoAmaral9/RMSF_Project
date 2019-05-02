//mixin.js
// Global functions file
var axios = require('axios');

exports.axiosRequest = function(method, url, params, data) {
    return new Promise(function (resolve, reject) {
        axios({
            method: method,
            url: url,
            params: params,
            data: data
        })
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    });
}
