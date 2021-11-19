var userDal=require("../DAL/user");
var userBal={
    getUser:function (callback){
        userDal.getUser(function (data,err){
            callback(data);
        })
    },
    getUserForTable:function (body,callback){
        userDal.getUserForTable(body,function (data,err){
            callback(data);
        })
    },
    addUser:function (body,callback){
        userDal.addUser(body,function (data,err){
            callback(data);
        })
    },
    getUserById:function (id,callback){
        userDal.getUserById(id,function (data,err){
            callback(data);
        })
    },
    update:function (id,callback){
        userDal.update(id,function (data,err){
            callback(data);
        })
    },
    deleteUserById:function (id,callback){
        userDal.removeById(id,function (data,err){
            callback(data);
        })
    },
}
module.exports=userBal;
