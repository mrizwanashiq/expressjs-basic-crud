var mongoose=require("mongoose");
var Schema=mongoose.Schema;
const schema=Schema({
    user_id:{type: mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    course_name: { type: String, required: true,maxlength:50 },
    description: { type: String, required: true,maxlength:50 },

});
module.exports=mongoose.model("Course",schema);
