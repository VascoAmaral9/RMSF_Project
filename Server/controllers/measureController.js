//measureController.js
// Import measure model
Measure = require('../models/measureModel');

// Handle index actions
exports.index = function (req, res) {
    Measure.get(function (err, measures) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else{
            res.json({
                status: "success",
                message: "Measures retrieved successfully",
                data: measures
            });
        }
    });
};

// Handle create data actions
exports.new = function (req, res) {
    var measure = new Measure();
    measure.id = req.body.id;
    measure.value = req.body.value;


    // save the measure and check for errors
    measure.save(function (err) {
        if (err)
            res.json(err);
        else{
            res.json({
                status: "success",
                message: 'New measure created!',
                data: measure
            });
        }
    });
};

// Handle view measure info
exports.view = function (req, res) {
    Measure.findOne({id: req.params.id}, function (err, measure) {
        if (err)
            res.json(err);
        else{
            res.json({
                status: "success",
                message: 'Measure details loading..',
                data: measure
            });
        }
    });
};

// Handle update measure info
exports.update = function (req, res) {
    Measure.findOne({id: req.params.id}, function (err, measure) {
        if (err)
            res.json(err);
        else if(measure){
            console.log(measure);
            measure.id = req.body.id ? req.body.id : measure.id;
            measure.value = req.body.value ? req.body.value : measure.value;


            Measure.findOneAndUpdate({id: req.params.id}, {
              $set: {
                  id: measure.id,
                  value: measure.value
              }
            }, function (err) {
                if (err)
                    res.json(err);

                res.json({
                    status: "success",
                    message: 'Measure Info updated',
                    data: measure
                });
            });
        } else{
            res.json({
                status: "failed",
                message: "id is not in the database"
            });
        }
    });
};

// Handle delete measure
exports.delete = function (req, res) {
    Measure.remove({
        id: req.params.id
    },
    function (err, measure) {
        if (err)
            res.json(err);
        else{
            res.json({
                status: "success",
                message: 'Measure deleted'
            });
        }
    });
};
