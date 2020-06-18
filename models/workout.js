var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [{
        type: {type: String, required: true},
        name: {type: String, required: true},
        duration: Number, 
        weight: Number,
        reps: Number,
        sets: Number
    }],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;