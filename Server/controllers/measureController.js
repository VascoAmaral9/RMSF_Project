//measureController.js
// Import measure model
Measure = require('../models/measureModel');

var mixin = require("../config/mixin");

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
    measure.temperature = req.body.temperature;
    measure.curr_limit = req.body.curr_limit;
    measure.fan_controller = req.body.fan_controller;

    if(measure.temperature >= measure.curr_limit || measure.fan_controller == 1)
      measure.fan_status = 1;
    else
      measure.fan_status = 0;


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

    Measure.findById(mixin.toObjectId(req.params.id), function (err, measure) {
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
    Measure.findById(mixin.toObjectId(req.params.id), function (err, measure) {
        if (err)
            res.json(err);
        else if(measure){
            console.log(measure);
            measure.temperature = req.body.temperature ? req.body.temperature : measure.temperature;
            measure.curr_limit = req.body.curr_limit ? req.body.curr_limit : measure.curr_limit;
            measure.fan_controller = req.body.fan_controller ? req.body.fan_controller : measure.fan_controller;
            measure.fan_status = req.body.fan_status ? req.body.fan_status : measure.fan_status;


            Measure.findOneAndUpdate({_id: mixin.toObjectId(req.params.id)}, {
              $set: {
                  temperature: measure.temperature,
                  curr_limit: measure.curr_limit,
                  fan_status: measure.fan_status
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
        _id: mixin.toObjectId(req.params.id)
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
