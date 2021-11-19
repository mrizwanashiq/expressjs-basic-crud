var express=require("express");
var router=express.Router();
var courseBal=require("../BAL/course");
var userBal=require("../BAL/user");

router.get("/",function (req,res){
    courseBal.getCourse(function (data,err){
        res.render("user");
    })


})

router.get("/abc",(req,res)=>{
    userBal.getUser(function (data,err){
       res.status(200).json(data.data);
    })
})

router.post("/",function (req,res){
    courseBal.addCourse(req.body,function (data,err){
        res.status(200).json({"user":200})
    })
})





module.exports=router;
