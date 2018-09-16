var express             = require("express"),
    app                 = express(),
    claasie             = require("./public/lib/classie.js"),
    Matej_3             = require("./public/Matej_3.js"),
    Matej_4             = require("./public/Matej_4.js");



app.use(express.static(__dirname, 'public'));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/Matej_1.html");
});

app.get("/biography", function(req, res){
    res.sendFile(__dirname + "/views/Matej_2.html");
});

app.get("/webdevelopment", function(req, res){
    res.sendFile(__dirname + "/views/Matej_3.html");
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/views/Matej_4.html");
});

app.listen(8080, function(){
    console.log("Server has started!!");
});

