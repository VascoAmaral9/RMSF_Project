// Routes Configuration
let userRoutes = require("./userRoutes")

var config = require('../config/config')();

function redirectUnmatched(req, res) {
  res.redirect(config.host.path);
}

module.exports = function(app){
    app.use('/users', userRoutes)

    app.use(redirectUnmatched);
};
