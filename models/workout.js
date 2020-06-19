const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [{
        type: {type: String, required: true},
        name: {type: String, required: true},
        distance: Number,
        duration: Number, 
        weight: Number,
        reps: Number,
        sets: Number
    }],
},{versionKey: false});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
