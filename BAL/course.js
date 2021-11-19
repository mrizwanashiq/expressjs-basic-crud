var courseDal=require("../DAL/course");
var courseBal={
    getCourse:function (callback){
        courseDal.getCourse(function (data,err){
            callback(data);
        })
    },
    addCourse:function (body,callback){
        courseDal.addCourse(body,function (data,err){
            callback(data);
        })
    },


}
module.exports=courseBal;
