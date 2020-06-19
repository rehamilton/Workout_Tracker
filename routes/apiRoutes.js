var db = require("../models");

module.exports = app => {

    //getLastWorkout (api.js)
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err)
        });
    });

    //addExercise (api.js)
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            {_id: req.params.id},
            {$push: {exercises: req.body}}
        )
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(er => {
            res.json(err)
        });
    });

    //createWorkout (api.js)
    app.post("/api/workouts", (req,res) => {    
        db.Workout.create({})
        .then(dbWorkouts => res.json(dbWorkouts))
        .catch(err => { 
            res.json(err)
        })
    });

    //getWorkoutsInRange (api.js)
    app.get("/api/workouts/range", (req,res) => {  
        db.Workout.find()
        .then(dbWorkouts =>{  
            res.json(dbWorkouts)
        })
        .catch(err => { 
            res.json(err)
        })
    });
};