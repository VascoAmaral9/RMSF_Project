//userRoutes.js
// Initialize express router
let router = require('express').Router();

// Import user controller
var userController = require('../controllers/userController');

// Import user services
var userServices = require('../services/users');

// User routes
router.route('/')
    .get(userController.index)
    .post(userController.new);

router.route('/login')
    .post(userServices.login);

router.route('/:username')
    .get(userController.view)
    .put(userController.update)
    .delete(userController.delete);


// Export API routes
module.exports = router;
