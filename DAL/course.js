var course=require("../models/course");
var db=require("../utility/conn");

var CourseDal={
    getCourse:function (callback){
        course.find().then(function (data){
            var obj={message:"success",data:data}
            callback(obj)
        }).catch(function (err){
            var obj={message:"error",data:err.message}
            callback(obj)
        })
    },

    addCourse:function (body,callback){
        var userObj=new course({
            user_id:body.user_id,
            course_name:body.course_name,
            description:body.description,
        });
        userObj.save().then(function (savedData) {
            var data={message:"success",data:savedData}
            callback(data)

        }).catch(function (err) {
            var arr={message:"error",data:err.message}
            callback(arr);
        })
    },

}

module.exports=CourseDal
