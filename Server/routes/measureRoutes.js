//measureRoutes.js
// Initialize express router
let router = require('express').Router();

// Import measure controller
var measureController = require('../controllers/measureController');

// User routes
router.route('/')
    .get(measureController.index)
    .post(measureController.new);

router.route('/:id')
    .get(measureController.view)
    .put(measureController.update)
    .delete(measureController.delete);


// Export API routes
module.exports = router;
