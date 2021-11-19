var express = require("express");
var app = express();
app.set("view engine",'ejs');
var path = require("path");
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts');
app.set('views', path.join(__dirname, '/views'));
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var user=require("./routes/user");
app.use("/user",user);

var course=require("./routes/course");
app.use("/course",course);
// app.get("/",function (req,res){
//     res.render("index")
// })
//
// app.get("/form",function (req,res){
//     res.render("form")
// })
// app.post("/",function (req,res){
//     var a=req.body
//
//    res.render("data",{abc:req.body})
// })


app.listen(3001,function (){
    console.log("Listening at 3000")
});
