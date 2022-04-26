const express = require('express');

const app =express();
app.set("view engine","pug");
const userNames = ["Sai","Kalyan","Raja","Rani"]
const bestMovie = "RRR"
const watchedMovie = true;
app.get ("/",function(req,res){
    res.render("index",{
        userNames,
        bestMovie,
        watchedMovie,
    });
    // res.send('Hello Vannakam');
});

app.get('/About', function (req,res) {
    res.render("About");
});

app.listen(3000,() => {
    console.log("server is on port 3000");
});
