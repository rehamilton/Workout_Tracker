var path = require("path");

module.exports = app => {
    //index page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //exercise page
    app.get("/exercise",(req,res) => {   
        res.sendFile(path.join(__dirname,"../public/exercise.html"));
    });

    //stats page
    app.get("/stats",(req,res) => {   
        res.sendFile(path.join(__dirname,"../public/stats.html"));
    });

};
