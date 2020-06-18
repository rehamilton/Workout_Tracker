var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Image.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
};