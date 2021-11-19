var express=require("express");
var router=express.Router();
var userBal=require("../BAL/user");

router.get("/",function (req,res){

        res.render("user", );

})

router.post("/",function (req,res){
    userBal.addUser(req.body,function (data,err){
        userBal.getUser(function (data,err) {
            res.render("user", {data: data.data});
        })
    })
})

router.post("/update",function (req,res){
    userBal.update(req.body,function (data,err){
        if (data.message=="success") {
            res.redirect("/user/")
        }
        else { console.log('Error in user update :' + data); }
    })
})
router.get('/rizwan/:id?', (req, res) => {
    userBal.getUserById(req.params.id, (data, doc) => {
        if (data.message == "success") {
            res.render("addOrUpdate", {data: data.data});
        }
    });

});

router.get('/delete/:id?', (req, res) => {
    userBal.deleteUserById(req.params.id, (data, doc) => {
        if (data.message=="success") {
            res.redirect("/user/")
        }
        else { console.log('Error in user delete :' + err); }
    });
});


router.get('/ajax/:id?', (req, res) => {
    userBal.getUserById(req.params.id, (data, doc) => {
        if (data.message == "success") {
            res.status(200).json(data.data)

        }
    });

});

router.post("/serverside",function (req,res){
    userBal.getUserForTable(req.body,function (data,err) {
        var obj={
            "draw": req.body.draw,
            "recordsTotal": data.rows,
            "recordsFiltered": data.rows,
            "data": data.data
            }
        res.status(200).json(obj);
    })
})
module.exports=router;
