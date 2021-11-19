var user=require("../models/user");
var db=require("../utility/conn");

var userDal={
    getUser:function (callback){
        user.aggregate([
            {
                $lookup:{
                    from:"courses",
                    localField:"_id",
                    foreignField:"user_id",
                    as:"course"
                }
            }
        ]).then(function (data){
            var obj={message:"success",data:data}
            callback(obj)
        }).catch(function (err){
            var obj={message:"error",data:err.message}
            callback(obj)
        })
        // user.find().then(function (data){
        //     var obj={message:"success",data:data}
        //     callback(obj)
        // }).catch(function (err){
        //     var obj={message:"error",data:err.message}
        //     callback(obj)
        // })
    },
    getUserForTable:function (body,callback){
    var search=body["search[value]"]

        var reg=new RegExp(search,"g");
    var sortOrder=body["order[0][dir]"];
    var columnNumber=body["order[0][column]"]
        var columnName=body["columns["+columnNumber+"][data]"]
        var sortCol=sortOrder=="asc"?1:-1
        var sortObj={};
    sortObj[columnName]=sortCol
        user.aggregate([
            {$match:{
                    $or:[{first_name:reg},{last_name:reg}]
                }
            },
            { $sort : sortObj },
            { $skip : parseInt(body.start) },
            { $limit : parseInt(body.length) },



        ]).then(function (data){
                user.count().then(function (rows){
                            var obj={message:"success",data:data,rows:rows}
                            callback(obj)
                        }).catch(function (err){
                            var obj={message:"error",data:err.message}
                            callback(obj)
                        })

        }).catch(function (err){
            var obj={message:"error",data:err.message}
            callback(obj)
        })

        // user.find().skip(parseInt(body.start)).limit(parseInt(body.length)).then(function (data){
        //     user.count().then(function (rows){
        //         var obj={message:"success",data:data,rows:rows}
        //         callback(obj)
        //     }).catch(function (err){
        //         var obj={message:"error",data:err.message}
        //         callback(obj)
        //     })
        //
        // }).catch(function (err){
        //     var obj={message:"error",data:err.message}
        //     callback(obj)
        // })
    },
    addUser:function (body,callback){
        var userObj=new user({
            first_name:body.fname,
            last_name:body.lname,
        });
        userObj.save().then(function (savedData) {
            var data={message:"success",data:savedData}
            callback(data)

        }).catch(function (err) {
            var arr={message:"error",data:err.message}
            callback(arr);
        })
    },
    getUserById:function (id,callback){
        user.findById(id).then(function (data){
            var obj={message:"success",data:data}
            callback(obj)
        }).catch(function (err){
            var obj={message:"error",data:err.message}
            callback(obj)
        })
    },
    update:function (id,callback){
        user.updateOne(
            { "_id" : id.id },
            { $set: {
                    first_name:id.fname,
                    last_name:id.lname,
                } ,
            },
            {runValidators: true}
        ).then(function (updateDate) {
            var data={message:"success",data:updateDate}
            callback(data)
        }).catch(function (err) {
            var data={message:"error",data:err.message}
            callback(data);
        });

        // user.findOneAndUpdate({ _id: id.body._id }, id.body, { new: true }, (data, doc) => {
        //     var obj={message:"success",data:data}
        //     callback(obj)
        //
        // }).catch(function (err){
        //     var obj={message:"error",data:err.message}
        //     callback(obj)
        // });
    },
    removeById:function (id,callback){
        user.findByIdAndRemove(id).then(function (data){
            var obj={message:"success",data:data}
            callback(obj)
        }).catch(function (err){
            var obj={message:"error",data:err.message}
            callback(obj)
        })
    },
}

module.exports=userDal
