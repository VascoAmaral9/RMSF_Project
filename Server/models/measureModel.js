//measureModel.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

// Setup schema
let schemaOptions = {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
};

var measureSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: Number,
        required: true
    }
}, schemaOptions);

// Export Measure model
var Measure = module.exports = mongoose.model('measure', measureSchema);
module.exports.get = function (callback, limit) {
    Measure.find(callback).limit(limit);
}
